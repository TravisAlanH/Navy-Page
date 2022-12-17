import React from "react";

export default function IPR({
  id,
  POC,
  Address,
  Address2,
  State,
  Zip,
  Phone,
  Qty,
  UI,
  UP,
  Description,
  Priority,
  Department,
  Date,
  Just,
  OF,
  IJS,
  WS,
  F,
  PS,
  FFS,
  HAZ,
  AUL,
}) {
  console.log(Department);
  return (
    <div className="IPRPrintArea">
      <div className="GridLayout">
        <div className="Department">
          <b>Department: {Department}</b>
        </div>
        <div className="Priority">
          <b>Priority: {Priority}</b>
        </div>
        <div className="RDD">
          <b>Required Delivery Date: {Date}</b>
        </div>
        <div className="Description">
          <b>Complete Description:</b>
        </div>
        <div className="Doc">
          <b>Doc # (MILSTRIP ONLY):</b>
        </div>
        <div className="NSN">
          <b>NSN/Part Number:</b>
        </div>
        <div className="QTY">
          <b>QTY</b>
        </div>
        <div className="UI">
          <b>U/I</b>
        </div>
        <div className="UP">
          <b>U/P</b>
        </div>
        <div className="EXT">
          <b>EXT</b>
        </div>
        <div className="Data11">{Description}</div>
        <div className="Data12"></div>
        <div className="Data13"></div>
        <div className="Data14">{Qty}</div>
        <div className="Data15">{UP}</div>
        <div className="Data16">{UI}</div>
        <div className="Data17">${parseFloat(UP) * parseFloat(Qty)}</div>
        <div className="Data21"></div>
        <div className="Data22"></div>
        <div className="Data23"></div>
        <div className="Data24"></div>
        <div className="Data25"></div>
        <div className="Data26"></div>
        <div className="Data27"></div>
        <div className="Data31"></div>
        <div className="Data32"></div>
        <div className="Data33"></div>
        <div className="Data34"></div>
        <div className="Data35"></div>
        <div className="Data36"></div>
        <div className="Data37"></div>
        <div className="Data41"></div>
        <div className="Data42"></div>
        <div className="Data43"></div>
        <div className="Data44"></div>
        <div className="Data45"></div>
        <div className="Data46"></div>
        <div className="Data47"></div>
        <div className="ShippingCharges">
          <b>Shipping Charges:</b>
        </div>
        <div className="ShippingTotal">$0.00</div>
        <div className="Grand">
          <b>Grand Total:</b>
        </div>
        <div className="GrandTotal">${parseFloat(UP) * parseFloat(Qty)}</div>
        <div className="SourceTo">
          <b>Source To:</b>
        </div>
        <div className="ShipTo">
          <b>Ship To:</b>
        </div>
        <div className="POC">POC:</div>
        <div className="POCData">{POC}</div>
        <div className="Name">Name:</div>
        <div className="NameData"></div>
        <div className="Address">Address:</div>
        <div className="AddressData">{Address}</div>
        <div className="ToAddress">Address:</div>
        <div className="ToAddressData">{Address2}</div>
        <div className="Phone">Phone #:</div>
        <div className="PhoneData">{Phone}</div>
        <div className="ToPhone">Phone #:</div>
        <div className="ToPhoneData"></div>
        <div className="RequestJustification">
          <b style={{ "color": "red", "fontSize": "1rem" }}>
            REQUEST MUST HAVE VALID JUSTIFICATION
          </b>
        </div>
        <div className="JustificationData">{Just}</div>
        <div className="Supplies">
          <b>SUPPLIES</b>
        </div>
        <div className="SuppliesRadio">
          <input type="radio" checked />
        </div>
        <div className="Or">
          <b>OR</b>
        </div>
        <div className="Services">
          <b>SERVICES</b>
        </div>
        <div className="ServicesRadio">
          <input type="radio" />
        </div>
        <div className="Blank"></div>
        <div className="RequestSuper">
          <b>REQUESTOR: (PRINT AND SIGN NAME)</b>
        </div>
        <div className="RequestSuperPhone">
          <b>Phone #:</b>
        </div>
        <div className="RequestSuperDate">
          <b>Date:</b>
        </div>
        <div className="RequestSuperData"></div>
        <div className="RequestSuperPhoneData"></div>
        <div className="RequestSuperDateData"></div>
        <div className="RequestSuper">
          <b>SUPERVISOR: (PRINT AND SIGN NAME)</b>
        </div>
        <div className="RequestSuperPhone">
          <b>Phone #:</b>
        </div>
        <div className="RequestSuperDate">
          <b>Date:</b>
        </div>
        <div className="RequestSuperData"></div>
        <div className="RequestSuperPhoneData"></div>
        <div className="RequestSuperDateData"></div>
        <div className="BelowHeader">
          <b>BELOW INFORMATION TO BE COMPLETED BY SUPPLY DEPT ONLY</b>
        </div>
        <div className="ScreenedFor">
          <b>
            SCREENED FOR AVAILABILITY FROM MANDATORY SOURCES (FAR PARA 8.001)
          </b>
        </div>
        <div className="ScreeningSection2">
          <b style={{ "fontSize": ".9rem" }}>Mandatory Sources of Supply</b>
        </div>
        <div className="ScreeningSection3">
          <b>Websites for Screening</b>
        </div>
        <div className="ScreeningSection4">
          <b>Status</b>
        </div>
        <div className="ScreeningSection2">
          Office Supplies: AbilityOne Office Supplies from FEDMALL or a local
          Servmart
        </div>
        <div className="ScreeningSection3">
          <a href=" ">
            https://www.restricted.fedmall.mil/webapp/wcs/stores/ servlet/en/fśŕ
          </a>
        </div>
        <div className="ScreeningSection4">{OF}</div>
        <div className="ScreeningSection2">
          Incidental Janitorial and Sanitation Supplies: AbilityOne Office
          Supplies from FEDMALL
        </div>
        <div className="ScreeningSection3">
          <a href=" ">
            https://www.restricted.fedmall.mil/webapp/wcs/stores/ servlet/en/fśŕ
          </a>
        </div>
        <div className="ScreeningSection4">{IJS}</div>
        <div className="ScreeningSection2">
          Wireless Services: NAVSUP FLC ‐ San Diego (DON Wireless Contract)
        </div>
        <div className="ScreeningSection3">
          <a href=" ">
            https://my.navsup.navy.mil/webcenter/portal/nss/page15/page1573417?
            _afrLoop=8752295544268910&_adf.ctrl-state=2g0041y7j_110#!%40%40%
            3Fwc.contextURL%3D%2Fspaces%2Fnss%26_adf.ctrl-state%3D2g0041y7j_114
          </a>
        </div>
        <div className="ScreeningSection4">{WS}</div>
        <div className="ScreeningSection2">
          Furniture: NAVSUP FLC ‐ Norfolk BPA
        </div>
        <div className="ScreeningSection3">
          <a href=" ">
            https://my.navsup.navy.mil/webcenter/portal/nss/page15/page1573417?
            _afrLoop=8752295544268910&_adf.ctrl-state=2g0041y7j_110#!%40%40%
            3Fwc.contextURL%3D%2Fspaces%2Fnss%26_adf.ctrl-state%3D2g0041y7j_114
          </a>
        </div>
        <div className="ScreeningSection4">{F}</div>
        <div className="ScreeningSection2">
          Printing Services: DLA Document Services
        </div>
        <div className="ScreeningSection3">
          <a href=" ">https://dso.dla.mil/DSF/storefront.aspx</a>
        </div>
        <div className="ScreeningSection4">{PS}</div>
        <div className="ScreeningSection22">
          Federal Supply Schedules (FSS) Contract #
        </div>
        <div className="ScreeningSection12">{FFS}</div>
        <div className="Hazmat">
          <b>HAZMAT:</b>
        </div>
        <div className="HazmatBlank">{HAZ}</div>
        <div className="ItemOnAUL">
          <b>Item on AUL:</b>
        </div>
        <div className="ItemOnAULBlank">{AUL}</div>
        <div className="HazmatPO">
          <b>HAZMAT PO Approver Signature</b>
        </div>
        <div className="HazmatPOBlank"></div>
        <div className="DocN">
          <b>DOC # (GCPC Only):</b>
        </div>
        <div className="DocNBlank"></div>
        <div className="JON">
          <b>Job Order Number (JON):</b>
        </div>
        <div className="JONBlank"></div>
        <div className="Optar">
          <b>OPTAR Holder Signature:</b>
        </div>
        <div className="OptarBlank"></div>
        <div className="AOCHPrintSign">
          <b>Approving Official ONLY: (PRINT AND SIGN NAME)</b>
        </div>
        <div className="AOCHDate">
          <b>Date:</b>
        </div>
        <div className="AOCHPrintSignBlank"></div>
        <div className="AOCHDateBlank"></div>
        <div className="AOCHPrintSign">
          <b>Cardholder/Requisitioner: (PRINT AND SIGN NAME)</b>
        </div>
        <div className="AOCHDate">
          <b>Date of Order:</b>
        </div>
        <div className="AOCHPrintSignBlank"></div>
        <div className="AOCHDateBlank"></div>
        <div className="BottomHeader">
          <b>
            FORM SHOULD BE TYPED FOR PROPER IDENTIFICATION OF ITEMS REQUESTED
          </b>
        </div>
      </div>
    </div>
  );
}
