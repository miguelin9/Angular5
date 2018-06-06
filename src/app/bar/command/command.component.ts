import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../services/command/command.service';
import { Command } from '../../models/command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  command = new Command();

  constructor(private commandService: CommandService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.commandService.selectCommand;
  }

}
