import { Component } from "@angular/core";
import { LocalStorageServiceEncrypt } from "angular-2-local-storage-encrypt";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private _localStorageService: LocalStorageServiceEncrypt) {}

  ngOnInit() {
    // Set theme based on saved value in local storage or browser preferences
    if (this._localStorageService.get<string>("theme")) {
      if (this._localStorageService.get<string>("theme") == "dark") {
        document.documentElement.setAttribute("theme", "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
      }
    } else {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this._localStorageService.set("theme", "dark");
        document.documentElement.setAttribute("theme", "dark");
      } else {
        this._localStorageService.set("theme", "light");
        document.documentElement.setAttribute("theme", "light");
      }
    }
  }

  darkTheme() {
    if (this._localStorageService.get("theme") == "dark") {
      return true;
    }
    return false;
  }

  // Switch to different theme and save it to local storage
  switchTheme() {
    if (this._localStorageService.get("theme") == "dark") {
      document.documentElement.setAttribute("theme", "light");
      this._localStorageService.set("theme", "light");
    } else {
      document.documentElement.setAttribute("theme", "dark");
      this._localStorageService.set("theme", "dark");
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
