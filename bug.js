const query = ref(db, 'users').where('email', '==', 'test@example.com');

const unsubscribe = onSnapshot(query, (snapshot) => {
  snapshot.forEach((doc) => {
    // This callback will be executed once for each document
    // in the query snapshot.
    console.log('Document ID:', doc.id);
    console.log('Document data:', doc.data());
  });
});

// ... later, when you're done listening to changes
unsubscribe();