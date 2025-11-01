# Fluxely

A no-code automation engine.

## How it started?

Back in January 2025, I applied for a job for a software developer role. the company ask was to make an app within 5 days to get qualified for the next round.

It was a basic AI app that uses Gemini to summarize the text. the company demand was to make a react flow project where I had to create 5 nodes of my choice and a text node that uses markdown editor.

It was my first time working with FastAPI and python itself. It took me several attempts to understand what I was making but I submitted the prototype within the time limit.

And they never reached out to me. 😅

---

## How it went ahead?

This wasn't a stop for me in June I was about to leave programming at all. But, I thought of giving this app a shot because it was perfect for the first project after the capstone one.

I really went all in for this project I created a notion page where I started to record all the next task. After my job my everyday work was to finish the next task soon.

I was posting this daily over the Twitter(x.com). I was reaching at a point where I could say that I am actually building something.

But, soon the chronic demotivations came in and I stopped working on this at all.

---

## Why not give up?

After all this now I am back at working on this project. 😉

Remember there is a reason why this repo is yet another **Failed** project. This repo isn't about recording the success, this is about recording all the learning from the projects.

---

# Things I learned after continuing this project for the 3rd time

## Creating the new MVP

I am starting with creating the MVP at first. I actualy had an MVP but the project is changed a lot. So, I am working back on creating the MVP.

The MVP will have the following features

- ReactFlow Editor
- Database connection and local store for saving the nodes.
- Runner - The core mechanic I am working on. This is the reason I am creating the MVP again. I want it to be really extensible able to run on computer locally through CLI and on browser.
- CLI Tool - The CLI first approach.

---

## Things I did (I may regret them) - 24th Oct'25

- **Deleted the backend**

  I just deleted the backend as it was not doing anything. It was just adding a layer that says made using fastAPI.

- **Removing AI written Scrap**

  - Removed the authStore and the flowStore.
  - Removed the API file from the frontend as all the backend routes were obscolete.
  - Minor tweaking to clean the code base a little
    - Removed the unaccessible routes.
  - Removed AI Written nodes from the registry
  - Removing the old canvas because it was adding complexity to the simple data(I will regret this the most)

- **Not Writing the runtime with Rust**

  - I don't know Rust. But, to look cool I am using rust in this project.
  - I am writing the runtime using rust. It will either be a success. or the list will continue to grow.
  - 15 mins later - I am not using Rust for sake of increasing complexity.

- **Making the CLI Toolkit with Python**

  - I created the CLI tool using the Typer and it is not able to run any command right now.

- **Learning the architecture**

  - **Frontend**

    - React for making the frontend
    - Save flow through REST API
    - Node assets

  - **Backend**

    - FastAPI for CRUD, validation, versioning
    - Authentication, roles and rate limit
    - Worker pool
    - Store in Database: PostgreSQL and Redis for Queues

  - **CLI**

    - Authenticate against the backend.
    - Save token locally in th config file
    - Local run uses a local runtime engine that does not execute arbitrary system actions.

  - **Execution Sandbox**

    - WebAssembly modules for user provided code

  [Got this part from chatgpt](https://chatgpt.com/c/6905a165-2104-8321-82bf-b710bd992a4c)
  Diagram (brief):
  Frontend ↔ Backend (FastAPI) ↔ DB/Storage
  CLI ↔ Backend (auth + flow fetch) or CLI ↔ Local files → Local Runtime (sandboxed)
  Worker pool (K8s) executes flows server-side in containers / Wasm engine.

---

## Data Schemas

---

## What I learned

- python
- ReactJS
- XYFlow

---

## Credits

Written By - Rakshit Gumber
Written With - Pain
