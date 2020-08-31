import React from 'react';
import MuiList, { ListProps as MuiListProps } from '@material-ui/core/List';

export type ListProps = MuiListProps;

const List: React.FC<ListProps> = (props) => {
  return <MuiList {...props} />;
};

export default List;
