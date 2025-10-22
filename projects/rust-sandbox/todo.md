# Learn for the Project

## Learn Rust Essentials

- Ownership -> Done
- traits, generics, lifetimes
- Rc, Arc, Mutex, RwLock, RefCell
- Send and Sync traits
- Pin and Unpin (for async)
- Smart pointers (Box, Rc, Arc)
- Future trait and async-await under the hood

---

## Learn How Async and Event Loops Work

- How Future works (poll-based)
- How executors run tasks (Waker, Poll, Context)
- How event loops wake tasks on IO readiness

## Mini thread scheduler

→ then build a task queue and a basic scheduler that picks tasks and runs them.

## 2. Implement a toy async runtime

## Add timers

## Add IO (optional but cool)

## Add a lightweight language or DSL'

| Concept                         | Why It Matters           | Learning Resource                                                   |
| ------------------------------- | ------------------------ | ------------------------------------------------------------------- |
| OS Scheduling & Threads         | To design your scheduler | _Operating Systems: Three Easy Pieces_ (OSTEP)                      |
| Event-driven IO (epoll, kqueue) | For async IO             | [Beej’s Guide to Network Programming](https://beej.us/guide/bgnet/) |
| Futures & Polling               | Core of async            | Rust Async Book                                                     |
| Memory management               | Safe ownership model     | Rustonomicon                                                        |
| Virtual Machines / Bytecode     | If you want scripting    | [Crafting Interpreters](https://craftinginterpreters.com/)          |

## Key Crates to Explore

| Crate                | Purpose                         |
| -------------------- | ------------------------------- |
| `futures`            | Future trait and combinators    |
| `mio`                | Low-level evented IO            |
| `tokio`              | Reference implementation        |
| `async-std`          | Alternative runtime             |
| `rhai` or `wasmtime` | Embedding scripting             |
| `crossbeam`          | Lock-free data structures       |
| `parking_lot`        | Fast synchronization primitives |

## Final Project Ideas

“MiniTokio” – a small async runtime that can:

Spawn tasks

Run an event loop

Handle timers

“Bounce” (you mentioned this) –
Build a runtime that can:

Run async workflows (tasks that can pause/resume)

Serialize workflow state

Schedule tasks later (like Temporal.io)

“RustScript” – a toy scripting runtime that executes simple code on your async executor.
