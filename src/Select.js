import React from 'react';

import {
  Wrapper,
  Label,
  Button,
  List,
  Option,
  Overlay,
} from './Select.style.js';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selectedIndex: 0,
      highlightedIndex: -1,
    };
  }

  open = () => {
    this.setState({ expanded: true }, () => {
      this.list.focus();
    });
  };

  close = () => {
    this.setState({ expanded: false, highlightedIndex: -1 }, () => {
      this.button.focus();
    });
  };

  updateSelected = () => {
    this.setState({ selectedIndex: this.state.highlightedIndex });
    this.close();
  };

  updateHighlighted = optionKey => {
    this.setState({ highlightedIndex: optionKey });
  };

  moveHighlight = direction => {
    const end = this.props.options.length - 1;
    const { highlightedIndex: index } = this.state;
    const atStart = index <= 0;
    const atEnd = index >= end;

    if (direction === 'UP')
      atStart ? this.updateHighlighted(end) : this.updateHighlighted(index - 1);
    if (direction === 'DOWN')
      atEnd ? this.updateHighlighted(0) : this.updateHighlighted(index + 1);
  };

  handleKeyDown = e => {
    const codes = {
      UP: 38,
      DOWN: 40,
      ESC: 27,
      ENTER: 13,
    };
    const { expanded } = this.state;
    if (!expanded && e.keyCode === codes.DOWN) return this.open();
    e.preventDefault();
    switch (e.keyCode) {
      case codes.ESC:
        this.close();
        break;
      case codes.DOWN:
        this.moveHighlight('DOWN');
        break;
      case codes.UP:
        this.moveHighlight('UP');
        break;
      case codes.ENTER:
        this.updateSelected();
        break;
      default:
        break;
    }
  };

  render() {
    const { options, label } = this.props;
    const { expanded, selectedIndex, highlightedIndex } = this.state;
    return (
      <Wrapper onKeyDown={this.handleKeyDown}>
        {expanded && <Overlay onClick={this.close} />}
        <Label>Choose your {label}</Label>
        <Button
          role="button"
          aria-label={`${label} select menu`}
          aria-expanded={expanded}
          aria-haspopup="true"
          onClick={e => {
            e.preventDefault();
            this.open();
          }}
          innerRef={ref => {
            this.button = ref;
          }}
        >
          {options[selectedIndex]}
        </Button>
        {expanded && (
          <List
            role="listbox"
            tabIndex="-1"
            aria-activedescendant={`option-${highlightedIndex}`}
            innerRef={ref => {
              this.list = ref;
            }}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                id={`option-${i}`}
                value={option}
                highlighted={highlightedIndex === i}
                aria-selected={selectedIndex === i}
                role="option"
                onClick={this.updateSelected}
                onMouseEnter={() => this.updateHighlighted(i)}
              >
                {option}
              </Option>
            ))}
          </List>
        )}
      </Wrapper>
    );
  }
}
