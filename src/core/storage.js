
const storage = localStorage

const STORAGE_KEY_ENTRIES = '__entries__'
const listeners = []

function addEntry(entry) {
  const entries = getEntries()
  entries.push(entry)
  storage.setItem(STORAGE_KEY_ENTRIES, JSON.stringify(entries))

  listeners.map(listener => listener(getEntries()))
}

function getEntries() {
  const entries = storage.getItem(STORAGE_KEY_ENTRIES)
  return entries ? JSON.parse(entries) : []
}

function addListener(listener) {
  listeners.push(listener)
}

function clearEntries() {
  storage.setItem(STORAGE_KEY_ENTRIES, JSON.stringify([]))
}

export default {
  addEntry,
  getEntries,
  addListener,
  clearEntries
}

