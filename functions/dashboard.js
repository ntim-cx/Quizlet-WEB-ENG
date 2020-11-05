const db = firebase.firestore().collection('exams');

exports.loadExams = db.get().then((snapshot)=>{
    snapshot.forEach((doc) => {
        console.log(doc.data())
        var data = doc.data();
        document.getElementById("exam-list").innerHTML += 
        `<div class="card mb-4 shadow-sm">
            <div class="card-header">
            <h4 class="my-0 font-weight-normal">${data.type} Exams</h4>
            </div>
            <div class="card-body">
            <h1 class="card-title pricing-card-title">${data.name} <small class="text-muted">/ ${data.difficulty}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li>${data.questionCount} questions</li>
                <li>Difficulty: ${data.difficulty}</li>
                <li>Email support</li>
                <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary" onclick="${data.id}">Take Exam</button>
            </div>
        </div>`
    });
});