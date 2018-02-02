var allItems = []
allItems.push("Buy ingredients for Crock Pot");
allItems.push("Pick up chair at IKEA");
allItems.push("Go see mom");
 
class YoutubeList extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
  }
  getInitialState() {
    return { allItems };
  }
  render() {
    var items = this.props.items.map((item) => {
      return <li><TodoItem item={item} /></li>;
    })
    return(
      <div>
        <ul>{items}</ul>
        <p><NewTodoItem addEvent={this.addEvent} /></p>
      </div>
    );
  }
  addEvent(todoItem){
    allItems.push(todoItem.newItem);
    this.setState({ allItems });
  }
}
export default YoutubeList