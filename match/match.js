const mentors = require('./mentors')
const mentees = require('./mentees')


function matchByMajor(mentors = [], mentees = []) {
    let mentor, mentee;
    let i, j;
    for (i = 0; i < mentees.length; i++) {
        mentee = mentees[i]
        for (j = 0; j < mentors.length; j++) {
            mentor = mentors[j]
            if (mentee.major === mentor.major) {
                pair(mentee, mentor)
            } else if (mentee.major.indexOf(mentor.major) > -1) {
                pair(mentee, mentor)
            } else if (mentor.major.indexOf(mentor.mentee) > -1) {
                pair(mentee, mentor)
            }
        }
    }
}


const pairedMentors = []
const pairedMentees = []

function pair(mentee, mentor) {
    console.log('Possible pair mentor email:%s major:%s with mentee email:%s major:%', mentor.email, mentor.major, mentee.email, mentee.major)
}

matchByMajor(mentors, mentees)