import admin from 'firebase-admin'

export var db: admin.firestore.Firestore

export const newFirestore = () => {
  if (db === undefined) {
    if (admin.apps.length === 0) {
      admin.initializeApp()
    }
    db = admin.firestore()
  }
}
