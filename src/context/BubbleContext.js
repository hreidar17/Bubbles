import React from 'react';

const BubbleContext = React.createContext({});

export const BubbleProductProvider = BubbleContext.Provider;
export const BubbleProductConsumer = BubbleContext.Consumer;
