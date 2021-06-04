class MyWorker {
  private job: IJob;

  constructor(job: IJob) {
    this.job = job;
  }

  setJob(job: IJob) {
    this.job = job;
  }

  doWork() {
    this.job.doJob();
  }
}

interface IJob {
  doJob(): void;
}

class FootJob implements IJob {
  doJob() {
    console.log("FootJob");
  }
}

class HandJob implements IJob {
  doJob() {
    console.log("HandJob");
  }
}

const worker = new MyWorker(new FootJob());
worker.doWork();
worker.setJob(new HandJob());
worker.doWork();
