using Microsoft.AspNetCore.Mvc;
using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace PdfConverterApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class Conversion : Controller
{
    [HttpPost("topdf")]
    public async Task<IActionResult> HtmlToPdfconversion()
    {
        // Read HTML content from the request body
        string htmlContent;
        using (StreamReader reader = new StreamReader(Request.Body))
        {
            htmlContent = await reader.ReadToEndAsync();
        }

        // Your existing PDF generation logic
        var document = new PdfDocument();
        PdfGenerator.AddPdfPages(document, htmlContent, PageSize.A4);
        byte[]? response = null;
        using (MemoryStream ms = new MemoryStream())
        {
            document.Save(ms);
            response = ms.ToArray();
        }

        string fileName = "converted.pdf";
        return File(response, "application/pdf", fileName);
    }
}