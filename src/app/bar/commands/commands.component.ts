import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandService } from '../../services/command/command.service';
import { Command } from '../../models/command';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { YesNoDialogComponent } from '../../dialogs/yes-no-dialog/yes-no-dialog.component';
import { Product } from '../../models/product';


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
    this.commandService.selectCommand = new Command();
    this.commandService.selectCommand.state = true;
    this.commandService.selectCommand.productList = new Array<Product>();
  }

  editCommand(command: Command): void {
    this.commandService.openCommandWithEdit(command);
  }

  deleteCommand(command: Command): void {
    this.matDialog.open(YesNoDialogComponent).afterClosed().subscribe(
      data => {
        if (data) {
          this.commandService.deleteCommand(command.$key)
        }
      }
    );
  }

}
