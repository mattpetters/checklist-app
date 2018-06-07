import React from 'react';
import * as checklistActions from './app/data/checklists';

import renderer from 'react-test-renderer';
const CREATE_LIST = 'checkoff/Checklists/CREATE'

describe('actions', () => {
  it('should create an action to create a checklist', () => {
    const expectedAction = {
      type: CREATE_LIST
    }
    expect(checklistActions.createChecklist()).toEqual(expectedAction)
  })
})
