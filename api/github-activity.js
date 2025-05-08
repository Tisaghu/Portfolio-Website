

export default async function handler(request, response) {
    const GITHUB_USERNAME = 'tisaghu';

    const GITHUB_TOKEN = process.env.GITHUB_PAT;

    const githubApiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;

    //Prepare Request Headers for Github API
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'tisaghu',
    };

    //Add Authorization header ONLY if token exists
    if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
        console.log("Using GitHub PAT for authentication. ");
    }
    else{
        console.warn("GITHUB_PAT environment variable not set. Making unauthenticated Github API request (lower rate limit)");
    }

    //Make the request to the GitHub API
    try {
        console.log(`Fetching data from: ${githubApiUrl}`);

        const githubResponse = await fetch(githubApiUrl, {
            method: 'GET',
            headers: headers
        });

        //Request failed
        if(!githubResponse.ok) {
            const errorText = await githubResponse.text();
            console.error(`GitHub API Error: Status: ${githubResponse.status}, Message: ${errorText}`);
        

            return response.status(502).json({
                message: 'Failed to retrieve data from Github.'
            });
        }

        //Request successful
        const rawActivityData = await githubResponse.json();
        console.log(`Successfully fetched ${rawActivityData.length} events from GitHub.`);

        //Process and filter data
        const processedActivity = rawActivityData
            .slice(0,10) //Take only the latest 10 events
            .map(event => {
                //Create a new simpler object for each event to send to the frontend.
                return {
                    id: event.id,
                    type: event.type,
                    repoName: event.repo.name,
                    repoUrl: `https://github.com/${event.repo.name}`,
                    createdAt: event.created_at
                };
            });
        
        response.status(200).json(processedActivity);   
    } catch (error) {
        console.error('Error within API route handler:', error);
        response.status(500).json({
            message: 'Internal Server Error occurred.'
        });
    }
    
}