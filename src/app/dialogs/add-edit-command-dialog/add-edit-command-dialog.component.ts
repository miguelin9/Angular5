import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Command } from '../../models/command';
import { CommandService } from '../../services/command/command.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-edit-command-dialog',
  templateUrl: './add-edit-command-dialog.component.html',
  styleUrls: ['./add-edit-command-dialog.component.css']
})
export class AddEditCommandDialogComponent implements OnInit {

  isEdit: boolean
  command: Command;
  controlForm: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddEditCommandDialogComponent>,
    private commandService: CommandService
  ) { }

  ngOnInit() {
    if (!this.command) {
      this.command = new Command;
    }
  }

  addCommand(): void {
    this.commandService.addCommand(this.command);
    this.dialogRef.close();
  }

  editCommand(): void {
    this.commandService.updateCommand(this.command);
    this.dialogRef.close();
  }

}