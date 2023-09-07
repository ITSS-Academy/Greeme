import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    // var dump_issue = function(issue) {
    //   console.log('Dumping issue:');
    //   for (var item in issue) {
    //     console.log('  ' + item + ': ' + JSON.stringify(issue[item]));
    //   }
    // };

    // redmine.issues({limit: 20}, function(err, data) {
    //   if (err) throw err;
    
    //   for (var i in data.issues) {
    //     dump_issue(data.issues[i]);
    //   }
    
    //   console.log('total_count: ' + data.total_count);
    // });
    return 'Hello World!';
  }
}
