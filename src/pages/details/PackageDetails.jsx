//npm packages
import { useTranslation } from "react-i18next";
//project files
import Data from "./Data";
import UseMoment from "../../utilities/useMoment";

export default function PackageDetails({ parcel }) {
  const { t } = useTranslation("common");
  //constants
  const { eta, last_updated, location_name, notes, verification_required } =
    parcel;

  //functions
  function getLabel(tag) {
    return t(`details.labels.${tag}`);
  }

  function getText(tag) {
    if (parcel.tag !== null) return t(`details.descriptions.${tag}`);
    else return t(`details.descriptions.unavailable`);
  }

  return (
    <div className="package">
      <Data
        label={getLabel("eta")}
        text={UseMoment(eta, true) || getText("eta")}
      />
      <Data label={getLabel("last_updated")} text={UseMoment(last_updated)} />
      <Data label={getLabel("location")} text={location_name} />
      <Data
        label={getLabel("verification")}
        text={
          verification_required
            ? getText("verification")
            : getText("verification_false")
        }
      />
      <div className="notes">
        <Data
          label={getLabel("notes")}
          text={notes ? notes : getText("notes")}
        />
      </div>
    </div>
  );
}
