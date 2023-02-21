import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  public series: string = "";
  public sequenceResult: string;
  public result: number[];
  ngbmodal: NgbModal;

  constructor(
    private formBuilder: FormBuilder,
    private ngbModal: NgbModal) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      seriesInput: ['', [Validators.required]]
    });
  }

  findSeries() {
    const series = this.form.controls["seriesInput"].value;
    debugger;

    if (series !== "") {

      this.result = this.getFibonacci(series);
    }
    else {
      alert('you must enter a number');
    }
  }

  getFibonacci(sequenceNumber: number) {
    if (!sequenceNumber) return [];
    if (sequenceNumber === 1) return [0];
    if (sequenceNumber === 2) return [0, 1];

    const seq = [0, 1];

    for (let i = 2; i < sequenceNumber; i++) {
      const a = seq[i - 2];
      const b = seq[i - 1];

      seq[i] = a + b;
    }

    return seq;
  }
}
