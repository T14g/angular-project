import { Job } from './job.model';

export class JobService {

  private jobs: Job[] = [
    // tslint:disable-next-line:max-line-length
    new Job('MD18', 'www.md18.com.br', 'Front-end Dev + WordPress', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtPQxQEH4GYN0Yc7icnRQSDyCrkREjCy_IALIpPD6JflRrwgG8Q&s', 1),
    // tslint:disable-next-line:max-line-length
    new Job('Webprodutora', 'www.webprodutora.com.br', 'Fullstack Dev + Joomla', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtPQxQEH4GYN0Yc7icnRQSDyCrkREjCy_IALIpPD6JflRrwgG8Q&s', 1)
  ];

  getJobs() {
    return this.jobs.slice();
  }


}
