# Do Next

- Linux Namespace
- On Linux, try commands like unshare, chroot, pivot_root, mounting /proc in a private mount namespace.
- Then read “Sandboxing Code in Rust” + “Better Sandboxing in Rust” to see how Rust folks apply the concepts.
- Use containers or minimal chroot jails to experiment.
- Start by forking into a child. In the child: drop privileges, close fds, set up a limited environment (maybe chroot).
- Then exec a simple binary (maybe one you wrote) inside that environment.
- Expand to use clone/unshare syscalls to create new mount namespace, PID namespace, user namespace, etc.
- Bind mount only necessary paths (e.g. bin, lib) into the new root.
- Use libcap (or equivalent in Rust) to remove capabilities.
- Limit syscalls (e.g. via seccomp filters) if you need stricter control.
- Try forcing directory traversal, mounting tricks, .., open file descriptors, etc.

## - Learn Rust

