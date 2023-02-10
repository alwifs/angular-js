import { Component } from '@angular/core';

import {
  faSearch,
  faUpload,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  faUpload = faUpload;
  faUser = faUser;
  
}