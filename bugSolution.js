// Ensure your Firebase rules allow read access for the given query

// ... (Firebase initialization code) ...

const db = getFirestore();

const query = query(collection(db, 'users'), where('email', '==', 'test@example.com')); // Use query() for more complex queries

const unsubscribe = onSnapshot(query, (snapshot) => {
  snapshot.forEach((doc) => {
    console.log('Document ID:', doc.id);
    console.log('Document data:', doc.data());
  });
}, (error) => {
  console.error('Error listening to changes:', error);
});

// ... later, when you're done listening to changes
unsubscribe();