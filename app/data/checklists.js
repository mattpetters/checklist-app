const LOAD_LISTS = 'checkoff/Checklists/LOAD'
const CREATE_LIST = 'checkoff/Checklists/CREATE'
const UPDATE_LIST = 'checkoff/Checklists/UPDATE'
const REMOVE_LIST = 'checkoff/Checklists/REMOVE'

const initialState = {
    checklists: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_LISTS:
      return { ...state, loading: true };
    case CREATE_LIST:
        //not implemented
        return Object.assign({}, state, { checklists: [...state.checklists, {id: 1, title:'New Empty List'}]})
    case UPDATE_LIST:
        //Not implemented
        return state.checklists.map((list) => {
            if (list.id === action.id) {
                return {
                    ...list,
                    title: action.title,
                    tasks: action.tasks
                } 
            } else return list;
        })
      return state
    case REMOVE_LIST:
        //Not implemented
      return state
    default: return state;
  }
}


// Action Creators
export function loadChecklists() {
  return { type: LOAD };
}

export function createChecklist() {
  return { type: CREATE_LIST };
}

export function updateChecklist(checklist) {
  return { type: UPDATE, checklist };
}

export function removeChecklist(checklist) {
  return { type: REMOVE, checklist };
}

