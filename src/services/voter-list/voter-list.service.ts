import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Voter } from '../../models/voter/voter.model'


@Injectable()
export class VoterListService{
    private voterListRef=this.db.list<Voter>('voter-list');
    constructor(private db:AngularFireDatabase){
        
    }
    getVoterList(){
        return this.voterListRef;
    }
    addVoter(voter:Voter){
        return this.voterListRef.push(voter);
    }
    editVoter(voter:Voter){
        return this.voterListRef.update(voter.key,voter);
    }
    removeVoter(voter:Voter){
        return this.voterListRef.remove(voter.key);
    }
}