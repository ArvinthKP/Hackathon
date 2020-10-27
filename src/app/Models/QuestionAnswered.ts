export class QuestionAnswered {
    uid: any;
    qid: any;
    answer: any;
    time: any;

    constructor(uid,qid,answer,time) {
        this.uid=uid;
        this.qid=qid;
        this.answer=answer;
        this.time=time;
    }
}
