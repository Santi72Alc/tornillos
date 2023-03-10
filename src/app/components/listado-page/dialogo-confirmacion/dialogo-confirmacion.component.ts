import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css'],
})
export class DialogoConfirmacionComponent implements OnInit {
  constructor(
    private dialogo: MatDialogRef<DialogoConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarDialogo(): void {
    this.dialogo.close(false);
  }
  
  confirmado(): void {
    this.dialogo.close(true);
  }

  ngOnInit() {}
}
