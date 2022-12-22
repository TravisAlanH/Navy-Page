import React from "react";

export default function RPN({
  id,
  Company,
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
  PriorAmount,
}) {
  let data;
  if (localStorage.getItem("RPN") === null) {
    data = {
      ACRN: "",
      GA: "",
      BFYEFY: "",
      APPN: "",
      SBHD: "",
      OBJCLASS: "",
      BCN: "",
      BLANK: "",
      SA: "",
      AAA: "",
      TT: "",
      PAA: "",
      COSTCOST: "",
    };
  } else {
    data = JSON.parse(localStorage.getItem("RPN"));
  }
  let Command = JSON.parse(localStorage.getItem("Command"));
  return (
    <div className="IPRPrintArea" id="RPN">
      <div className="GridLayoutRPN">
        <div className="B1"></div>
        <div className="DocN AlignEndBottom">Document Number:</div>
        <div className="DocNPlace BorderBottom GrayLight"></div>
        <div className="AmendNum BorderBottom AlignEndBottom">Amendment #:</div>
        <div className="ZeroZeroOne AlignEndBottom GrayLight">001</div>
        <div className="MPC AlignEndBottom">MPC:</div>
        <div className="B2 BorderBottom"></div>
        <div className="PageOneOfOne AlignEndBottom">Page 1 of 1</div>
        <div className="OptarLog AlignEndBottom">OPTAR Log:</div>
        <div className="B4 BorderBottom Yellow"></div>
        <div className="B1"></div>
        <div className="B2 AlignEndBottom">Local Code:</div>
        <div className="B2 BorderBottom Yellow"></div>
        <div className="B1 AlignEndBottom">Purchase Number:</div>
        <div className="B1 BorderBottom Yellow"></div>
        <div className="B3 AlignEndBottom">Transaction Date:</div>
        <div className="B4 BorderBottom Yellow"></div>
        <div className="B7"></div>
        <div className="B14"></div>
        <div className="B1 BorderAll AlignCenterCenter">ACRN</div>
        <div className="B1 BorderAll AlignCenterCenter">GA</div>
        <div className="B1 BorderAll AlignCenterCenter">BFY/EFY</div>
        <div className="B1 BorderAll AlignCenterCenter">APPN</div>
        <div className="B1 BorderAll AlignCenterCenter">SBHD</div>
        <div className="B1 BorderAll AlignCenterCenter">OBJ CLASS</div>
        <div className="B1 BorderAll AlignCenterCenter">BCN</div>
        <div className="B1 BorderAll AlignCenterCenter"></div>
        <div className="B1 BorderAll AlignCenterCenter">SA</div>
        <div className="B1 BorderAll AlignCenterCenter">AAA</div>
        <div className="B1 BorderAll AlignCenterCenter">TT</div>
        <div className="B1 BorderAll AlignCenterCenter">PAA</div>
        <div className="B1 BorderAll AlignCenterCenter">COST CODE</div>
        <div className="B1 BorderAll AlignCenterCenter">AMOUNT</div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.ACRN}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.GA}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.BFYEFY}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.APPN}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.SBHD}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.OBJCLASS}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.BCN}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.BLANK}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.SA}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.AAA}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.TT}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.PAA}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight">
          {data.COSTCOST}
        </div>
        <div className="B1 BorderAll AlignCenterCenter GrayLight"></div>
        <div className="B13 BorderAll AlignEndBottom GrayLight">
          Prior Funding Document Grand Total
        </div>
        <div className="B1 BorderAll Yellow">{PriorAmount}</div>
        <div className="B14 BorderAll"></div>
        <div className="B1 BorderAll AlignCenterCenter">ACRN</div>
        <div className="B1 BorderAll AlignCenterCenter">Item Number</div>
        <div className="B8 BorderAll AlignCenterCenter">
          Line Item Decription
        </div>
        <div className="B1 BorderAll AlignCenterCenter">Unit Of Issue</div>
        <div className="B1 BorderAll AlignCenterCenter">Quantity Ordered</div>
        <div className="B1 BorderAll AlignCenterCenter">Unit Price</div>
        <div className="B1 BorderAll AlignCenterCenter">Line Item Total</div>
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 AlignBottom">
          This Amendment is issued to Increase/Decrease funding for{" "}
        </div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 AlignBottom">
          Subsistance of Drilling Reserve Personnel who are conducting
        </div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 AlignBottom">
          2 four hour IDT drills on day following the Dinner Meal and on the{" "}
        </div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 AlignBottom">
          day of for the breakfast/Lunch Meals dates listed below:
        </div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        <div className="B1 BorderAll Gray"></div>
        {/*  */}
        <div className="B1 BorderRight">{data.ACRN}</div>
        <div className="B1 BorderRight">1</div>
        <div className="B8 BorderAll Yellow">
          {Date} {Description}
        </div>
        <div className="B1 BorderAll">{UI}</div>
        <div className="B1 BorderAll Yellow">{Qty}</div>
        <div className="B1 BorderAll">{UP}</div>
        <div className="B1 BorderAll GrayLight">
          ${(parseFloat(UP) * parseFloat(Qty)).toFixed(2)}
        </div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B8 BorderAll Yellow"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll Yellow"></div>
        <div className="B1 BorderAll GrayLight"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 AlignEndBottom">Terms:</div>
        <div className="B3 AlignEndBottom"> 1) Method of Payment:</div>
        <div className="B5 BorderAll GrayLight">GCPC</div>
        <div className="B1 "></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 "></div>
        <div className="B3 AlignEndBottom">2) Transaction Type: </div>
        <div className="B5 BorderAll Yellow">Credit Card</div>
        <div className="B1 "></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 "></div>
        <div className="B3 AlignEndBottom"> 3) Card Holder: </div>
        <div className="B5 BorderAll Yellow">{Command.POC}</div>
        <div className="B1 "></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/* 11135111 */}
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderTop BorderRight GrayLight">
          Source of Supply Circle One
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight GrayLight">
          1) FAR 8.002 Mandatory Source:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Navy
          Galley&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other Service Dining
          Facility/Galley{" "}
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight GrayLight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight GrayLight">
          2) Open
          Market:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Commercial Vendor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Catering Service
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight AlignCenterCenter GrayLight">
          Open Market "Fair and Reasonable Pricing" determined by: Circle One
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight GrayLight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight GrayLight">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
          Annual Market Survey
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
          Written Price Quote per IPR
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B11 BorderRight BorderBottom AlignCenterCenter GrayLight">
          Copies of Annual Market Survey to be forwarded to your RCC for PPMAP
          Records.
        </div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 AlignEndBottom">SOS:</div>
        <div className="B6 BorderBottom Yellow">{Company}</div>
        <div className="B1 AlignEndBottom">POC:</div>
        <div className="B3 BorderBottom BorderRight Yellow">{POC}</div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 AlignEndBottom">Address:</div>
        <div className="B6 BorderBottom Yellow">{Address}</div>
        <div className="B4 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 AlignEndBottom">City / State:</div>
        <div className="B6 BorderBottom Yellow">{State}</div>
        <div className="B4 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B1 BorderRight"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 AlignEndBottom ">Zip:</div>
        <div className="B2 BorderBottom Yellow">{Zip}</div>
        <div className="B1 AlignEndBottom ">Phone:</div>
        <div className="B3 BorderBottom">{Phone}</div>
        <div className="B4 BorderRight"></div>
        <div className="B1 Gray"></div>
        {/*  */}
        <div className="B13 BorderTop BorderRight AlignEndBottom">
          Line Item Page Total:
        </div>
        <div className="B1 GrayLight">
          ${(parseFloat(UP) * parseFloat(Qty)).toFixed(2)}
        </div>
        {/*  */}
        <div className="B2 AlignEndBottom"> Department Head: </div>
        <div className="B11 BorderBottom BorderRight"></div>
        <div className="B1"></div>
        {/*  */}
        <div className="B2"></div>
        <div className="B10 FlexRowSpaceBetween BorderRight">
          <span>Print Name</span>
          <span>Signature</span>
          <span>Date</span>
        </div>
        <div className="B1 BorderRight AlignEndBottom">Grand Total:</div>
        <div className="B1 GrayLight">
          ${(parseFloat(UP) * parseFloat(Qty)).toFixed(2)}
        </div>
        {/*  */}
        <div className="B2 AlignEndBottom"> Funds Approver: </div>
        <div className="B10 BorderBottom BorderRight Yellow"></div>
        <div className="B1 BorderRight"></div>
        <div className="B1 GrayLight"></div>
        {/*  */}
        <div className="B2"></div>
        <div className="B10 FlexRowSpaceBetween BorderRight">
          <span>Print Name</span>
          <span>Signature</span>
          <span>Date</span>
        </div>
        <div className="B1 BorderBottom BorderRight AlignEndBottom">
          Cumulative Total:
        </div>
        <div className="B1 GrayLight">
          ${(parseFloat(UP) * parseFloat(Qty)).toFixed(2)}
        </div>
        <div className="B14 BorderTop FlexRowCenterCenter">
          <span>PREVIOUS EDITION IS OBSOLETE</span>
        </div>
      </div>
    </div>
  );
}
