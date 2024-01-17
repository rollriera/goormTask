class Github{

    constructor() {
        this.token = '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';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getCommits(user, repo) {
        const commitsResponse = await fetch(`https://api.github.com/repos/${user}/${repo}/commits`);
        const commits = await commitsResponse.json();
        return commits;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                'Authorization': `token ${this.token}`
            }
        });
        

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
            headers: {
                'Authorization': `token ${this.token}`
            }
        });

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
    
}