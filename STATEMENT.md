# Problem Statement & System Design

## Overview

Managing personal schedules and quick reminders often requires a lightweight, accessible tool that operates without heavy dependencies or graphical interface overhead. The goal of this project is to build an intuitive, command-line interface (CLI) application in Python that seamlessly combines calendar lookup features with persistent event logging.

## Objectives

1. **Calendar Display**: Provide an accurate representation of standard monthly calendars for any requested year and month.
2. **Data Persistence**: Enable users to log personal events or notes that remain accessible even after closing the program.
3. **Simple User Experience**: Implement an intuitive loop-driven CLI menu interface for easy navigation.

## Functional Requirements

- **Menu Operations**:
  - Present explicit user navigation options (`View Calendar`, `Add Event`, `View Events`, `Exit`).
  - Gracefully handle invalid menu entries with error prompts.
- **Calendar Generation**:
  - Accept valid integer inputs for year and month (1–12) and output standard calendar grids.
- **File Handling**:
  - Append new formatted event entries (`[date] - note`) to `notes.txt`.
  - Read and output all content from `notes.txt` upon request.

## Architecture & Code Structure

The application follows a modular functional approach within `project.py`:

- `getc(year, month)`: Uses Python's built-in `calendar` module to fetch and return formatted calendar text.
- `menu()`: Renders menu options and reads user input.
- `event(date, note)`: Formats event details into standardized output strings.
- `sd(text)`: Handles file append operations (`a` mode) to write formatted text to `notes.txt`.
- `rd()`: Opens and reads (`r` mode) stored entries from `notes.txt`.
- `run()`: Contains the core control loop managing application state and user interactions.
