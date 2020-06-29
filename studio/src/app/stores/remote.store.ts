import {createStore} from '@stencil/store';

import {ConnectionState, DeckdeckgoEventDeckRequest} from '@deckdeckgo/types';

interface RemoteStore {
  remote: boolean;
  pendingRequests: DeckdeckgoEventDeckRequest[] | undefined;
  connectionState: ConnectionState;
  acceptedRequest: DeckdeckgoEventDeckRequest | undefined;
}

const {state, onChange} = createStore({
  remote: false,
  pendingRequests: undefined,
  connectionState: ConnectionState.DISCONNECTED,
  acceptedRequest: undefined,
} as RemoteStore);

export default {state, onChange};
