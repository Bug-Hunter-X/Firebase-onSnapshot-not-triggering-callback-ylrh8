# Firebase onSnapshot Not Triggering Callback

This repository demonstrates a common issue encountered when using Firebase's `onSnapshot` function.  The callback function within `onSnapshot` doesn't trigger even when data is added to the database.

## Problem

The provided code attempts to listen for changes to a Firebase collection (`users`) based on an email query.  Despite data matching the query being added, the callback function within `onSnapshot` remains inactive.  This makes real-time updates impossible.

## Solution

The solution involves double checking the rules in the Firestore database security rules to ensure data access is permitted, and then carefully examining the query itself for potential issues. There are also cases where it may involve issues with the order of asynchronous operations.