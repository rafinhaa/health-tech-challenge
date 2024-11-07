import { useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Box } from "@/components/ui/box"
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control"
import Icon from "@/components/ui/icon"
import { Input, InputField } from "@/components/ui/input"

export default function AddProduct() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  const _params = useLocalSearchParams()

  return (
    <Box className={`flex-1 bg-white pb-[${insets.bottom}px] gap-5 p-5`}>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>{t("product.name")}</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField type="text" autoCapitalize="none" autoCorrect={false} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon
            as={() => (
              <Icon
                name="alert-circle-outline"
                size={20}
                colorClassName="color-indicator-error"
              />
            )}
          />
          <FormControlErrorText></FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>
            {t("product.description")}
          </FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField type="text" autoCapitalize="none" autoCorrect={false} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon
            as={() => (
              <Icon
                name="alert-circle-outline"
                size={20}
                colorClassName="color-indicator-error"
              />
            )}
          />
          <FormControlErrorText></FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>{t("product.price")}</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField type="text" autoCapitalize="none" autoCorrect={false} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon
            as={() => (
              <Icon
                name="alert-circle-outline"
                size={20}
                colorClassName="color-indicator-error"
              />
            )}
          />
          <FormControlErrorText></FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>
            {t("product.discountPercentage")}
          </FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField type="text" autoCapitalize="none" autoCorrect={false} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon
            as={() => (
              <Icon
                name="alert-circle-outline"
                size={20}
                colorClassName="color-indicator-error"
              />
            )}
          />
          <FormControlErrorText></FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>{t("product.imageUrl")}</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField type="text" autoCapitalize="none" autoCorrect={false} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon
            as={() => (
              <Icon
                name="alert-circle-outline"
                size={20}
                colorClassName="color-indicator-error"
              />
            )}
          />
          <FormControlErrorText></FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  )
}
