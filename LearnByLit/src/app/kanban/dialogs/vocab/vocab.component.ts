import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { BookService } from "../../book.service";

@Component({
  selector: "app-vocab",
  templateUrl: "./vocab.component.html",
  styleUrls: ["./vocab.component.scss"],
})
export class VocabDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<VocabDialogComponent>,
    public bookService: BookService,
    @Inject(MAT_DIALOG_DATA) public vocab: any
  ) {}

  ngOnInit() {}

  wordDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.vocab.wordDrop,
      event.previousIndex,
      event.currentIndex
    );
    this.bookService.updateWords(this.vocab.id, this.vocab.tasks);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
