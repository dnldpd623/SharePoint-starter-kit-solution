import * as React from 'react';
import styles from './FollowedSites.module.scss';
import { IFollowedResult } from './IFollowedSitesProps';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export interface IPagingProps {
  allItems: IFollowedResult[];
  nrOfItems: number;

  fUpdateItems: (pagedItems: IFollowedResult[]) => void;
}

export interface IPagingState {
  crntPage: number;
}

export default class Paging extends React.Component<IPagingProps, IPagingState> {
  constructor(props: IPagingProps) {
    super(props);

    this.state = {
      crntPage: 0
    };
  }

  /**
   * Load the previous page
   */
  private _prevPage = () => {
    let { crntPage } = this.state;
    if (crntPage > 0) {
      crntPage--;
      // Update the current page
      this.setState({
        crntPage
      });
      // Update elements to render
      this._triggerUpdate(crntPage);
    }
  }

  /**
   * Load the previous page
   */
  private _nextPage = () => {
    let { crntPage } = this.state;
    if ((this.props.nrOfItems*(this.state.crntPage)) < this.props.allItems.length) {
      crntPage++;
      // Update the current page
      this.setState({
        crntPage
      });
      // Update elements to render
      this._triggerUpdate(crntPage);
    }
  }

  /**
   * Triggers the update function with the new batch of items
   */
  private _triggerUpdate = (pageNr: number) => {
    let allItems = [...this.props.allItems];
    // Pass the next batch of items to render to the parent component
    this.props.fUpdateItems(allItems.splice((pageNr * this.props.nrOfItems), this.props.nrOfItems));
  }

  /**
   * Default React render method
   */
  public render(): React.ReactElement<IPagingProps> {
    if (this.props.nrOfItems && this.props.allItems && this.props.allItems.length > this.props.nrOfItems) {
      return (
        <div className={styles.paging}>
          <DefaultButton label="Previous"
                         onClick={this._prevPage}
                         disabled={this.state.crntPage <= 0}>
            <Icon iconName="ChevronLeft" />
          </DefaultButton>
          <DefaultButton onClick={this._nextPage}
                         disabled={(this.props.nrOfItems*(this.state.crntPage+1)) >= this.props.allItems.length}>
            <Icon iconName="ChevronRight" />
          </DefaultButton>
        </div>
      );
    }

    return null;
  }
}
