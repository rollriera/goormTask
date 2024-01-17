
const github = new Github();

const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== "") {
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found") {
                ui.showAlert('User not Found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                if(data.repos.length > 0) {
                    return github.getCommits(userText, data.repos[0].name);
                }
            }
        })
        .then(commits => {
            if(commits) {
                ui.showCommits(commits);
            }
        })
        .catch(err => console.log(err));
    } else {
        ui.clearProfile();
    }
});
