import { AddEditCommandDialogComponent } from '../../dialogs/add-edit-command-dialog/add-edit-command-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandService } from '../../services/command/command.service';
import { Command } from '../../models/command';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { YesNoDialogComponent } from '../../dialogs/yes-no-dialog/yes-no-dialog.component';


@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  commandList: Command[];
  displayedColumns = ['date', 'state', 'table', 'total', 'actions'];
  dataSource: MatTableDataSource<Command>; // lo mismos datos que el commandList pero para poder ordenar en la tabla.

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private commandService: CommandService,
    public matDialog: MatDialog
  ) { }

  refreshData() {
    this.commandService.getCommands()
      .snapshotChanges()
      .subscribe(dataSnapshotList => {
        this.commandList = [];
        dataSnapshotList.forEach(dataSnapshot => {
          let command = dataSnapshot.payload.toJSON();
          command['$key'] = dataSnapshot.key;
          this.commandList.push(command as Command);
        });
        this.dataSource = new MatTableDataSource(this.commandList);
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit() {
    this.refreshData();
  }

  addCommand(): void {
    const dialogRef = this.matDialog.open(AddEditCommandDialogComponent);
    dialogRef.componentInstance.isEdit = false;
  }

  editCommand(command): void {
    const dialogRef = this.matDialog.open(AddEditCommandDialogComponent);
    dialogRef.componentInstance.command = command;
    dialogRef.componentInstance.isEdit = true;
    dialogRef.afterClosed().subscribe(data => {
      this.refreshData();
    });
  }

  deleteCommand(product): void {
    this.matDialog.open(YesNoDialogComponent).afterClosed().subscribe(
      data => {
        if (data) {
          this.commandService.deleteCommand(product.$key)
        }
      }
    );
  }

}
