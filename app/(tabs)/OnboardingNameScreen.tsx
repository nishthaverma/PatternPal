import { Text, Center, Heading, Input, Button } from 'native-base';
import { NativeBaseProvider, extendTheme } from 'native-base';
export default function OnboardingNameScreen() {
    return (
        <NativeBaseProvider>
            <Heading> Name </Heading>
            <Input
        placeholder="Type here!"
      />
            <Button> Continue </Button>
        </NativeBaseProvider>
    )

}