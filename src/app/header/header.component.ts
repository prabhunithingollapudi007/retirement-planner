import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  comingSoonFeatureModalTitle: string = "Coming soon...";
  comingSoonFeatureModalBody: string = "This feature is not yet implemented. Stay tuned !!!";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openComingSoonFeatureModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
