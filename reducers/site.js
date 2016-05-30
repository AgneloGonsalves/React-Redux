import { SEARCH_INPUT_CHANGED, MARK_CLICKED } from '../constants/ActionTypes';
import { Site } from '../constants/Site';

const initialState = {
  site : Site,
  searchTerm : '',
  clickedSite : []
};

export default function site(state = initialState, action) {

  var doFilter = (searchTerm=state.searchTerm, filters=state.filterOptions) => {
    var filtered = Site;
    if (searchTerm) {
      filtered = Site.filter(site => site.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }

    return filtered;
  };

  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm : action.searchTerm,
      site : doFilter(action.searchTerm)
    };

  case MARK_CLICKED:

    return {
      ...state,
      clickedSite : [
        ...state.clickedSite,
        action.name
      ]
    };

  default:
    return state;
  }
}
