# Hello World!

Here is the source code for a TypeScript/React.js web application that I deployed via Azure Pipelines where you can access the lyrics of a song by typing up the song name, its artist and submitting these. It achieves this by sending a GET request via the lyrics.ovh REST API. It uses Materialise-CSS as its UI Library. You can access it at http://getsonglyrics.azurewebsites.net/ . Have fun!

Making this web application combined the React.js skills that I have recently acquired with a newfound understanding of TypeScript. It also helped me to develop some appreciation of DevOps and CI/CD Pipelines on Azure in the process of deploying the web application.

You can access my build pipeline at "azure-pipelines.yml", here at the root. The web application can be changed if the source code is modified at any branch of this repository called 'master' or 'develop' (with the modifications committed); as it triggers the build pipeline. What is also of note is that the build pipeline accesses my application and creates a build folder to store the build artifact formed whenever it is triggered, and will install Node.js to achieve this.

In terms of its release pipeline (which is in my Azure Pipelines project corresponding to this web application), it is there to ensure that whenever the aforementioned build pipeline is triggered, that it quickly picks up the build artifact that is formed, and will deploy it to my web application; that is, you can see the new changes that were committed on the website!
