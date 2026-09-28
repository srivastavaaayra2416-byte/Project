# Console Calendar & Event Logger

A lightweight, terminal-based Python application that allows users to view monthly calendars, add customized event notes, and view saved events persistent across sessions.

## Features

- **View Monthly Calendar**: Display any year and month calendar grid directly in the terminal.
- **Add Events**: Save important dates and notes to a persistent text file (`notes.txt`).
- **View Events**: Display all previously stored events and reminders.
- **Persistent Storage**: Automated reading and writing to disk via simple file handling operations.

## File Structure

- `project.py`: Main Python source file containing the menu system and core application logic.
- `notes.txt`: Data storage file containing saved event entries.

## Prerequisites

- Python 3.x installed on your system. No external third-party libraries required (`calendar` is part of Python's Standard Library).

## Usage

1. Open your command line or terminal.
2. Run the script using Python:
   ```bash
   python project.py
