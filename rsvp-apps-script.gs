/**
 * RSVP backend for the Rohit & Mita wedding site.
 * Stores every RSVP as a row in this spreadsheet (lives in YOUR Google Drive).
 *
 * SETUP (one time, ~3 minutes):
 * 1. Go to https://sheets.new  -> rename it e.g. "Wedding RSVPs".
 * 2. Extensions -> Apps Script. Delete the sample code, paste THIS file, Save.
 * 3. Deploy -> New deployment -> type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Deploy, authorize, and COPY the Web app URL (ends in /exec).
 * 4. In the wedding HTML, set:  const RSVP_ENDPOINT = "PASTE_THE_/exec_URL";
 *
 * View responses any time by opening the Sheet in your Drive.
 */
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('RSVPs') || ss.insertSheet('RSVPs');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Attending', 'Coming With', 'Guests', 'Members', 'Note']);
  }
  var p = (e && e.parameter) ? e.parameter : {};
  sheet.appendRow([new Date(), p.name || '', p.phone || '', p.attending || '', p.coming || '', p.guests || '', p.members || '', p.note || '']);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('RSVP endpoint is live.');
}
