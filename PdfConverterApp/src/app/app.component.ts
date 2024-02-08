import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PdfConverterApp';
  htmlContent: string = '';
  htmlFile!: File;
  pdfSrc: SafeResourceUrl | undefined;
  loading: boolean = false;

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer){}

  selectFile(evt: any){
    this.htmlFile = evt.target.files[0];
    // Read HTML file content and display in textarea
    const reader = new FileReader();
    reader.onload = () => {
      this.htmlContent = reader.result as string;
    };
    reader.readAsText(this.htmlFile);
  }

  sendFile(){
    const reader = new FileReader();
    reader.onload = () => {
      const htmlContent = reader.result as string;
      const formData = new FormData();
      formData.append('htmlContent', htmlContent);
      this.loading = true;
      this.apiService.convert(formData).subscribe(
        (response: Blob) => {
          this.loading = false;
          console.log('Response from API:', response);
          // Create a URL for the response blob object
          let unsafeUrl = URL.createObjectURL(response);
          // Use DomSanitizer to sanitize the URL
          this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
          console.log('PDF Source:', this.pdfSrc); // Log PDF source
        },
        (error) => {
          console.error('Error sending file to API:', error);
          this.loading = false;
        }
      );
    };
    reader.readAsText(this.htmlFile);
  }
  

  downloadPdf(){
    if (this.pdfSrc) {
      // Convert SafeResourceUrl back to string
      const url = this.sanitizer.sanitize(SecurityContext.URL, this.pdfSrc);
      if (url) {
        // Create Blob from PDF source
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            // Create URL for the Blob
            const blobUrl = URL.createObjectURL(blob);
            // Create temporary anchor element
            const anchor = document.createElement('a');
            anchor.href = blobUrl;
            anchor.download = 'generated.pdf';
            // Trigger a click event on the anchor element
            anchor.click();
          })
          .catch(error => {
            console.error('Error downloading PDF:', error);
          });
      }
    }
  }
}
