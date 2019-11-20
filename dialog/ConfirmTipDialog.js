import React from 'react'
import Dialog, {DialogContent, DialogTitle} from "react-native-popup-dialog";
import {BackHandler, StyleSheet} from "react-native";
import {withNavigation} from 'react-navigation'

const styles = StyleSheet.create({
  verticalDialogContent: {
    paddingTop: 16,
  }
})


class ConfirmTipDialog extends React.PureComponent {

  static defaultProps = {
    visible: false,
    width: 0.8,
    title: 'Transaction Confirm',
    titleStyle: null,
    titleAlign: 'center',
    hasTitleBar: true,
    content: null,
    contentStyle: styles.verticalDialogContent
  }

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      titleStyle: props.titleStyle,
      titleTextStyle: props.titleTextStyle,
      titleAlign: props.titleAlign,
      hasTitleBar: props.hasTitleBar,
      content: props.content,
      contentStyle: props.contentStyle
    }
  }

  componentDidMount(): void {
    this.props.navigation.addListener("willFocus", () => {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    })

    this.props.navigation.addListener("willBlur", () => {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    })
  }

  // disable hardware back button
  onBackPress = () => {
    // nothing
    return true
  }

  render() {
    return (
      <Dialog
        onTouchOutside={() => {
        }}
        width={this.props.width}
        visible={this.props.visible}
        dialogTitle={
          <DialogTitle
            title={this.props.title}
            style={this.props.titleStyle}
            textStyle={this.props.titleTextStyle}
            align={this.props.titleAlign}
            hasTitleBar={this.props.hasTitleBar}
          />}>
        <DialogContent style={this.props.contentStyle}>
          {this.props.content}
        </DialogContent>
      </Dialog>
    )
  }
}

export default withNavigation(ConfirmTipDialog)
