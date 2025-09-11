import { type NextRequest, NextResponse } from "next/server"
import { GoogleAuth } from "google-auth-library"
import { type sheets_v4, google } from "googleapis"

interface WaitlistEntry {
  persona: string
  name: string
  email: string
  location: string
  phoneNumber: string
  keepUpdated: boolean
  submittedAt: string
}

async function getGoogleSheetsClient(): Promise<sheets_v4.Sheets> {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}")

    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    return google.sheets({ version: "v4", auth })
  } catch (error) {
    console.error("Error setting up Google Sheets client:", error)
    throw new Error("Failed to authenticate with Google Sheets")
  }
}

async function appendToSheet(entry: WaitlistEntry): Promise<void> {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      console.error("GOOGLE_SHEET_ID is missing or incorrect")
      throw new Error("GOOGLE_SHEET_ID environment variable is not set")
    }

    const headerRange = "A1:G1"
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
    })

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "RAW",
        requestBody: {
          values: [["Persona", "Name", "Email", "Location", "Phone Number", "Keep Updated", "Submitted At"]],
        },
      })
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            entry.persona,
            entry.name,
            entry.email,
            entry.location,
            entry.phoneNumber,
            entry.keepUpdated ? "Yes" : "No",
            entry.submittedAt,
          ],
        ],
      },
    })
  } catch (error) {
    console.error("Error appending to Google Sheet:", error)
    throw new Error("Failed to save to Google Sheet")
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { persona, name, email, location, phoneNumber, keepUpdated } = body

    if (!persona || !name || !email || !location || !phoneNumber) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const entry: WaitlistEntry = {
      persona,
      name,
      email,
      location,
      phoneNumber,
      keepUpdated: keepUpdated || false,
      submittedAt: new Date().toISOString(),
    }

    await appendToSheet(entry)

    console.log("New waitlist entry saved to Google Sheets:", entry)

    return NextResponse.json(
      {
        message: "Successfully added to waitlist and saved to Google Sheets",
        timestamp: entry.submittedAt,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing waitlist submission:", error)

    if (error instanceof Error) {
      if (error.message.includes("Google Sheets")) {
        return NextResponse.json(
          {
            error: "Failed to save to Google Sheets. Please check your configuration.",
          },
          { status: 500 },
        )
      }
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json({ error: "Google Sheet not configured" }, { status: 500 })
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A:G",
    })

    const rows = response.data.values || []

    if (rows.length === 0) {
      return new NextResponse("No data available", {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      })
    }

    const csvContent = rows.map((row) => row.join(",")).join("\n")

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="waitlist-data.csv"',
      },
    })
  } catch (error) {
    console.error("Error exporting waitlist data from Google Sheets:", error)
    return NextResponse.json({ error: "Failed to export data from Google Sheets" }, { status: 500 })
  }
}
