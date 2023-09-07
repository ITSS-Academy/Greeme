import { Injectable } from '@nestjs/common';
import { CreateTrackerDto } from './dto/create-tracker.dto';
import { UpdateTrackerDto } from './dto/update-tracker.dto';
import { HttpService } from '@nestjs/axios';
import { config_redmine } from 'src/redmine';

@Injectable()
export class TrackerService {
  private urlAPI='';
  private url = config_redmine.url + "trackers" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }



  create(createTrackerDto: CreateTrackerDto) {
    return 'This action adds a new tracker';
  }

  findAll():Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res) => {
        resolve(res.data.trackers);
      }, (err) => {
        reject(err);
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} tracker`;
  }

  update(id: number, updateTrackerDto: UpdateTrackerDto) {
    return `This action updates a #${id} tracker`;
  }

  remove(id: number) {
    return `This action removes a #${id} tracker`;
  }
}
