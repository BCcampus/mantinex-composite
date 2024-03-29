/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Composite, CompositeItemRenderer } from '.';

interface TestItem {
  id: number;
  label: string;
}
const items: TestItem[] = [
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
  { id: 4, label: 'Item 4' },
  { id: 5, label: 'Item 5' },
];

const renderItem: CompositeItemRenderer<TestItem> = (
  { item, ...props },
  { selected, onExpandMouseEventHandler }
) => (
  <div {...props} onClickCapture={onExpandMouseEventHandler}>
    {item.label} {selected ? '[SELECTED]' : ''}{' '}
  </div>
);

describe('@bccampus/react-composite', () => {
  it('renders without crashing', () => {
    render(
      <Composite
        type="VerticalListbox"
        items={items}
        focusOptions={{
          loop: true,
        }}
        selectionOptions={{
          multiple: true,
        }}
        renderItem={renderItem}
      />
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
