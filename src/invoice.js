import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Invoice() {
  // eslint-disable-next-line
  // const tripid = useMemo(
  //   () => window.location.href.split("/").reverse()?.[0],
  //   []
  // );

  const location = "";
  let tripid = null;

  // Use URLSearchParams to parse query parameters
  //   const queryParams = new URLSearchParams(location.search);
  //   const id = queryParams.get("id"); // Access the 'id' parameter
  if (true) {
    tripid = "673ee598454df4e55518276d";
  }

  if (!tripid) {
    //eslint-disable-next-line
    tripid = useMemo(() => window.location.href.split("/").reverse()?.[0], []);
  }

  const [loading, setLoading] = useState(true);

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const data = {
    rental_package: null,
    detail: {
      _id: "673ee598454df4e55518276d",
      unique_id: 281685,
      invoice_number: "OHM PTE 21112024 0281685",
      provider_language: [],
      received_trip_from_gender: [],
      accessibility: [],
      service_type_id: "65d3466abe2dc504d25ddd7d",
      type_id: "65d345dabe2dc504d25dc200",
      confirmed_provider: "66338d4a84b64c7e89ce5701",
      current_provider: "66338d4a84b64c7e89ce5701",
      current_providers: [],
      split_payment_users: [],
      providers_id_that_rejected_trip: [],
      user_id: "67315f9707b9f119146335df",
      provider_id: "66338d4a84b64c7e89ce5701",
      trip_service_city_type_id: "663e1c22b920f4f7e80fb6d7",
      zone_queue_id: null,
      is_trip_inside_zone_queue: false,
      is_favourite_provider: false,
      speed: 0,
      bearing: 0,
      vehicle_details: {
        _id: "66338df184b64c7e89ce7914",
        name: "MG Luxury",
        accessibility: ["handicap", "hotspot", "baby_seat"],
        plate_no: "TS08UL8226",
        model: "zs",
        color: "Black",
        passing_year: "2023",
        service_type: "65d3466abe2dc504d25ddd7d",
        admin_type_id: "65d345dabe2dc504d25dc200",
        is_documents_expired: false,
        is_selected: true,
        is_document_uploaded: true,
      },
      payment_gateway_type: 13,
      trip_type: 1,
      user_type: 2,
      user_type_id: "6653528b2ea5ab0a770a5589",
      payment_id: 0,
      room_number: "",
      floor: 0,
      provider_first_name: "Serajul",
      provider_last_name: "Hak",
      provider_phone: "8084747880",
      user_first_name: "Rishab ",
      user_last_name: "Agarwal ",
      user_phone: "8247409650",
      payment_intent_id: "",
      tip_payment_intent_id: "",
      payment_status: 1,
      razorepay_payment_link_id: "",
      is_provider_accepted: 1,
      is_provider_status: 9,
      is_trip_end: 1,
      is_trip_completed: 1,
      is_trip_cancelled: 0,
      is_trip_cancelled_by_user: 0,
      trip_type_amount: 0,
      is_trip_cancelled_by_provider: 0,
      is_trip_cancelled_by_dispatcher: 0,
      cancelled_by_admin_id: null,
      is_min_fare_used: 0,
      is_user_rated: 0,
      is_provider_rated: 0,
      airport_add_charge: 420,
      custom_price: true,
      referrer_phone_number: "9912686011",
      user_app_version: "",
      provider_app_version: "1.5.10",
      user_device_type: "ios",
      provider_device_type: "android",
      is_user_invoice_show: 1,
      is_provider_invoice_show: 1,
      is_surge_hours: 0,
      surge_multiplier: 0,
      is_cancellation_fee: 0,
      is_paid: 1,
      is_pending_payments: 0,
      wallet_payment: 0,
      total_after_wallet_payment: 1105,
      remaining_payment: 0,
      is_tip: false,
      tip_amount: 0,
      is_toll: false,
      toll_amount: 0,
      source_address:
        "Rajiv Gandhi International Airport (HYD), Shamshabad, Hyderabad, Telangana, India",
      destination_address:
        "108, Golden Heights Colony, Hyderabad, Upperpally, Telangana 500048, India",
      sourceLocation: [17.2402633, 78.42938509999999],
      initialDestinationLocation: [17.354954, 78.41301539999999],
      destinationLocation: [17.35389619392368, 78.41311557214242],
      providerPreviousLocation: [17.3538957, 78.413115],
      providerLocation: [17.353947, 78.4131333],
      server_start_time_for_schedule: null,
      no_of_time_send_request: 0,
      is_schedule_trip: false,
      complete_date_tag: "Nov 21, 2024",
      complete_date_in_city_timezone: "2024-11-21T13:44:35.553Z",
      currency: "₹",
      currencycode: "INR",
      admin_currency: "₹",
      admin_currencycode: "INR",
      unit: 1,
      timezone: "Asia/Kolkata",
      cancel_reason: "",
      payment_error: "",
      payment_error_message: "",
      total_distance: 22.24,
      total_time: 26,
      total_waiting_time: 0,
      total_stop_waiting_time: 0,
      base_distance_cost: 1052.3809523809523,
      user_first_trip_discount: 0,
      city_id: "6401b19d7e59316793278d8c",
      country_id: "63c8fe9ecbf8e5299eb06a3c",
      is_fixed_fare: false,
      fixed_price: 0,
      is_provider_earning_set_in_wallet: false,
      is_transfered: false,
      provider_have_cash: 1105,
      pay_to_provider: -1105,
      provider_income_set_in_wallet: 0,
      payment_transaction: [],
      refund_amount: 0,
      is_amount_refund: false,
      is_airport_pickup: false,
      userFirstTrip: false,
      is_slab_applied: true,
      slab_applied: {
        id: "65d3469ebe2dc504d25dec1a",
        name: "MG 2",
        limit: "18",
        price_per_unit_distance: "23",
      },
      trip_type_option: "1",
      payment_type: "1",
      fare_estimate_info: {
        distance: "21.93",
        time: 31.733396799999998,
        estimatedPrice: 1105,
        tripType: "11",
        systemEstimatedPrice: 1102.5,
        usePromoPrice: false,
        promoPrice: 0,
      },
      corporate_id: null,
      txn_id: "",
      is_prepaid: false,
      payment_confirmed: false,
      confirmed_amount: 0,
      remaining_amount: 0,
      payment_remarks: "",
      payment_confirmed_on: null,
      confirmed_info: [],
      is_foc_trip: false,
      utr_no: null,
      utr_img: "",
      partner_trip_id: "",
      partner_fare: null,
      distance_cost: 188.24,
      time_cost: 0,
      waiting_time_cost: 0,
      stop_waiting_time_cost: 0,
      total_service_fees: 578.24,
      tax_fee: 52.619047619047706,
      user_miscellaneous_fee: 0,
      provider_miscellaneous_fee: 0,
      user_tax_fee: 0,
      provider_tax_fee: 0,
      total_after_tax_fees: 607.15,
      surge_fee: 0,
      total_after_surge_fees: 578.24,
      promo_payment: 0,
      total_after_promo_payment: 607.15,
      referral_payment: 0,
      total_after_referral_payment: 607.15,
      total: 1105,
      payment_mode: 1,
      cash_payment: 1105,
      card_payment: 0,
      current_rate: 1,
      wallet_current_rate: 1,
      provider_service_fees: 0,
      total_in_admin_currency: 1105,
      service_total_in_admin_currency: 607.15,
      provider_service_fees_in_admin_currency: 0,
      total_after_user_tax_fees: 607.15,
      provider_profit_fees: 0,
      user_create_time: "2024-11-21T07:47:36.628Z",
      schedule_start_time: null,
      accepted_time: "2024-11-21T07:47:45.613Z",
      provider_arrived_time: "2024-11-21T07:47:51.626Z",
      provider_trip_start_time: "2024-11-21T07:47:51.626Z",
      provider_trip_end_time: "2024-11-21T08:14:33.200Z",
      destination_addresses: [],
      actual_destination_addresses: [],
      is_ride_share: false,
      ride_share_limit: 2,
      is_otp_verification: true,
      confirmation_code: 489684,
      is_otp_verified: false,
      created_by: 4,
      created_at: "2024-11-21T07:47:36.628Z",
      updated_at: "2024-11-21T08:16:04.347Z",
      __v: 0,
    },
    min_fare: 0,
    timezone_for_display_date: "Asia/Kolkata",
    provider_detail: {
      dl_no: null,
      pan_no: null,
      site: null,
      vendor_id: null,
      _id: "66338d4a84b64c7e89ce5701",
      provider_type: 0,
      provider_type_id: null,
      first_name: "Serajul",
      languages: [],
      received_trip_from_gender: [],
      is_trip: [],
      is_near_trip: [],
      is_near_available: 0,
      is_go_home: 0,
      is_ride_share: 0,
      wallet: 0,
      wallet_currency_code: "INR",
      last_name: "Hak",
      email: "serajulhak25@gmail.com",
      gender: "",
      country_phone_code: "+91",
      customer_id: "",
      is_documents_expired: false,
      account_id: "",
      account_number: "",
      bank_code: "",
      bank_id: "",
      is_vehicle_document_uploaded: true,
      phone: "8084747880",
      mentor: "",
      password: "03dc1abbfd65d40f0f70750950b70c3f",
      picture: "",
      token: "s3S4jqugzBPsTFOnRBoOfClp3sVV8Gxa",
      service_type: "65d3466abe2dc504d25ddd7d",
      admintypeid: "65d345dabe2dc504d25dc200",
      car_model: "",
      car_number: "",
      device_type: "android",
      app_version: "1.5.10",
      bio: "",
      address: "",
      address_location: [],
      zipcode: "",
      social_unique_id: "",
      social_ids: [],
      login_by: "manual",
      device_timezone: "Asia/Kolkata",
      city: "Hyderabad",
      cityid: "6401b19d7e59316793278d8c",
      country: "India",
      country_id: "63c8fe9ecbf8e5299eb06a3c",
      is_use_google_distance: false,
      vehicle_detail: [
        {
          _id: "66338df184b64c7e89ce7914",
          name: "MG Luxury",
          accessibility: ["handicap", "hotspot", "baby_seat"],
          plate_no: "TS08UL8226",
          model: "zs",
          color: "Black",
          passing_year: "2023",
          service_type: "65d3466abe2dc504d25ddd7d",
          admin_type_id: "65d345dabe2dc504d25dc200",
          is_documents_expired: false,
          is_selected: true,
          is_document_uploaded: true,
        },
      ],
      destinationLocation: [],
      providerPreviousLocation: [17.356901, 78.4169237],
      providerLocation: [17.3568666, 78.417111],
      is_available: 1,
      total_request: 907,
      accepted_request: 72,
      completed_request: 881,
      cancelled_request: 0,
      rejected_request: 0,
      is_active: 1,
      is_approved: 1,
      is_partner_approved_by_admin: 1,
      is_document_uploaded: 1,
      device_unique_code: "",
      rate: 4,
      rate_count: 5,
      referred_by: null,
      is_referral: 0,
      referral_code: "6LG12N9U",
      total_referrals: 0,
      location_updated_time: "2024-11-21T08:20:55.199Z",
      last_transferred_date: "2024-05-02T12:55:38.918Z",
      created_at: "2024-05-02T12:55:38.918Z",
      updated_at: "2024-11-21T08:20:55.208Z",
      unique_id: 1970,
      __v: 843337,
      uid: "hhnoXbigVdULkU9XC1EmIRpdQNl1",
      charge_start_time: null,
      start_online_time: "2024-11-21T06:40:14.000Z",
      zone_queue_id: null,
      category: 1,
      emp_id: "",
      device_token: "",
      evd_id: "",
      unique_id_number: "",
      guardien_name: "",
      guardien_phone: "",
      relation: "",
      bearing: -79.1728744506836,
    },
    user_detail: {
      _id: "67315f9707b9f119146335df",
      user_type: 0,
      user_type_id: null,
      first_name: "Rishab ",
      last_name: "Agarwal ",
      email: "agarwalrishab30@gmail.com",
      country_phone_code: "+91",
      phone: "8247409650",
      gender: "",
      token: "TLSX9LNAaTCLiGCVWsNE56uTeQltSVI8",
      password: "d41d8cd98f00b204e9800998ecf8427e",
      picture: "",
      device_token:
        "ekJQ8kVbVEQUryL49P80z-:APA91bG7NoGAvlmyzIPypFGTCX06iuDzwPW26NWnz9f1yG4ksDPOS15WGJW2JI9EtmyDCABmG3xQbaokqsQts3vEmyFeNeQDE2ytM1Ly5az6Jm6jXrxbsAY",
      device_type: "ios",
      corporate_ids: [],
      bio: "",
      favourite_providers: [],
      address: "",
      zipcode: "",
      social_unique_id: "",
      social_ids: [],
      login_by: "manual",
      device_timezone: "IST",
      customer_id: "",
      city: "",
      is_document_uploaded: 1,
      referred_by: null,
      is_referral: 0,
      country: "India",
      country_id: "",
      total_referrals: 0,
      refferal_credit: 0,
      corporate_wallet_limit: 0,
      wallet: 0,
      wallet_currency_code: "INR",
      is_use_wallet: 0,
      current_trip_id: null,
      is_approved: 1,
      promo_count: 0,
      home_address: "",
      work_address: "",
      home_location: [],
      work_location: [],
      total_request: 1,
      completed_request: 0,
      cancelled_request: 0,
      app_version: "",
      referral_code: "K29S3N68",
      rate: 0,
      rate_count: 0,
      created_at: "2024-11-11T01:36:23.185Z",
      updated_at: "2024-11-11T01:36:23.185Z",
      unique_id: 194499,
      __v: 1,
    },
    type_detail: {
      _id: "65d345dabe2dc504d25dc200",
      typename: "EV - MG",
      description: "",
      type_image_url: "service_type_images/65d345dabe2dc504d25dc200cGUX.png",
      map_pin_image_url:
        "service_type_map_pin_images/65d345dabe2dc504d25dc200clHoe.png",
      service_type: 0,
      priority: 0,
      is_business: 1,
      is_default_selected: false,
      ride_share_limit: 2,
      created_at: "2024-02-19T12:13:14.361Z",
      updated_at: "2024-02-19T12:13:14.361Z",
      __v: 0,
    },
    service_detail: {
      _id: "65d3466abe2dc504d25ddd7d",
      countryid: "63c8fe9ecbf8e5299eb06a3c",
      is_hide: 1,
      surge_multiplier: 1,
      surge_start_hour: 0,
      surge_end_hour: 0,
      is_surge_hours: 1,
      is_zone: 1,
      rich_area_surge: [],
      surge_hours: [
        {
          day: "0",
          day_time: [],
          is_surge: false,
        },
        {
          day: "1",
          day_time: [],
          is_surge: false,
        },
        {
          day: "2",
          day_time: [],
          is_surge: false,
        },
        {
          day: "3",
          day_time: [],
          is_surge: false,
        },
        {
          day: "4",
          day_time: [],
          is_surge: false,
        },
        {
          day: "5",
          day_time: [],
          is_surge: false,
        },
        {
          day: "6",
          day_time: [],
          is_surge: false,
        },
      ],
      is_business: 1,
      countryname: "India",
      cityid: "6401b19d7e59316793278d8c",
      cityname: "Hyderabad",
      typeid: "65d345dabe2dc504d25dc200",
      type_image: "",
      min_fare: 0,
      provider_profit: 0,
      typename: "EV - MG",
      is_car_rental_business: 1,
      car_rental_ids: [
        "663dbcc9b920f4f7e8fef349",
        "65d467b290142536665607fc",
        "65d467959014253666560324",
        "65d466cc901425366655d6b3",
        "65d4669c901425366655c8f2",
      ],
      base_price_distance: 15,
      base_price_time: 0,
      base_price: 390,
      price_per_unit_distance: 26,
      price_for_total_time: 0,
      waiting_time_start_after_minute: 30,
      price_for_waiting_time: 5,
      waiting_time_start_after_minute_multiple_stops: 10,
      price_for_waiting_time_multiple_stops: 10,
      tax: 5,
      max_space: 4,
      cancellation_fee: 50,
      user_miscellaneous_fee: 0,
      provider_miscellaneous_fee: 0,
      user_tax: 0,
      provider_tax: 0,
      is_ride_share: 0,
      airport_add_charge: 0,
      display_flag: false,
      display_order: 3,
      show_for_user: true,
      allow_driver_to_create_trip: false,
      zone_ids: [],
      created_at: "2024-02-19T12:15:38.885Z",
      updated_at: "2024-02-19T12:15:38.885Z",
      __v: 21,
      slabs: [
        {
          id: "65d34690be2dc504d25de761",
          name: "MG 1",
          limit: "8",
          price_per_unit_distance: "26",
        },
        {
          id: "65d3469ebe2dc504d25dec1a",
          name: "MG 2",
          limit: "18",
          price_per_unit_distance: "23",
        },
        {
          id: "65d346abbe2dc504d25deffb",
          name: "MG 3",
          limit: "36",
          price_per_unit_distance: "22",
        },
        {
          id: "65d346b6be2dc504d25df3c4",
          name: "MG 4",
          limit: "41",
          price_per_unit_distance: "22",
        },
        {
          id: "65d346c1be2dc504d25df609",
          name: "MG 5",
          limit: "51",
          price_per_unit_distance: "22",
        },
        {
          id: "65d346cfbe2dc504d25df92c",
          name: "MG 6",
          limit: "101",
          price_per_unit_distance: "32",
        },
      ],
      a2c_settings: [
        {
          airport_id: "663f89b2f9824c15b29a78f9",
          service_type_id: "65d3466abe2dc504d25ddd7d",
          minimum_fare: "0",
          distance_for_base_price: "25",
          base_price: "650",
          price_per_unit_distance: "26",
          waiting_time_start_after_minutes: "0",
          cancellation_fee: "0",
          toll_amount: "0",
          tax: "5",
          use_a2c_billing: true,
          use_a2c_slabs: false,
          use_standard_toll_amount: false,
          _id: "66308ac7de00fea3a353b313",
        },
      ],
      use_slab_pricing: false,
      c2a_settings: [
        {
          airport_id: "663f89b2f9824c15b29a78f9",
          service_type_id: "65d3466abe2dc504d25ddd7d",
          minimum_fare: "0",
          distance_for_base_price: "35",
          base_price: "799",
          price_per_unit_distance: "28",
          waiting_time_start_after_minutes: "0",
          cancellation_fee: "0",
          toll_amount: "70",
          tax: "5",
          use_a2c_billing: true,
          use_a2c_slabs: false,
          use_standard_toll_amount: false,
          _id: "66308c2fde00fea3a353de0e",
        },
      ],
      auto_surge_buffer_time: 0,
      is_auto_surge: false,
      outstation_settings: [
        {
          service_type_id: "65d3466abe2dc504d25ddd7d",
          base_distance: "300",
          price_for_base_distance: "6599",
          price_per_unit_distance: "28",
          driver_day_allowance: "750",
          driver_night_allowance: "1000",
          tax: "5",
          service_eligible_for_outstation: true,
          use_outstation_billing: true,
          _id: "66c5aa2b0a5201bae46df978",
        },
      ],
    },
    tripservice: {
      _id: "663e1c22b920f4f7e80fb6d7",
      service_type_id: "65d3466abe2dc504d25ddd7d",
      city_id: "6401b19d7e59316793278d8c",
      service_type_name: "EV - MG",
      min_fare: 0,
      provider_profit: 0,
      typename: "",
      is_car_rental_business: 1,
      car_rental_ids: [],
      base_price_distance: 15,
      base_price_time: 0,
      base_price: 390,
      price_per_unit_distance: 26,
      price_for_total_time: 0,
      price_for_waiting_time: 5,
      waiting_time_start_after_minute: 30,
      price_for_waiting_time_multiple_stops: 10,
      waiting_time_start_after_minute_multiple_stops: 10,
      surge_multiplier: 1,
      surge_start_hour: 0,
      surge_end_hour: 0,
      is_surge_hours: 1,
      user_miscellaneous_fee: 0,
      provider_miscellaneous_fee: 0,
      user_tax: 0,
      provider_tax: 0,
      tax: 5,
      max_space: 4,
      cancellation_fee: 50,
      created_at: "2024-05-10T13:07:46.318Z",
      updated_at: "2024-05-10T13:07:46.318Z",
      __v: 0,
    },
  };

  return (
    <>
      <div id="invoice" className="overflow-hidden pb-8">
        <div className="p-4">
          <div className="flex justify-between">
            <img
              src="https://www.petervis.com/electronics/resistor_symbol/resistor_symbol/ohm-symbol.gif"
              alt="image"
            />
            <div>
              <div>
                {data ? (
                  <p className="text-xl">
                    {data?.detail?.invoice_number || (
                      <p className="text-xl">
                        OHM PTE {date}
                        {month}
                        {year}{" "}
                        {data?.detail?.unique_id.toString().padStart(7, "0")}
                      </p>
                    )}
                  </p>
                ) : (
                  <p className="text-xl">
                    OHM PTE {date}
                    {month}
                    {year} {data?.detail?.unique_id.toString().padStart(7, "0")}
                  </p>
                )}
              </div>
              <p className="text-green-600 text-4xl text-right">Tax Invoice</p>
              <p className="text-gray-600 mt-2 text-xl text-right">
                Save Environment
              </p>
            </div>
          </div>
          <div className="pl-2 pt-4">
            <p>1,22B, Administrative Staff College Of India Campus,</p>
            <p>Road Number 5,Banjara Hills,</p>
            <p>Hyderabad,Telangana-500034</p>
          </div>
          <div className="pt-3">
            <p className="">Service Tax Category: Passenger Transportation</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="">GSTIN/UIN: 36AADCO2887K1ZY</p>
              <div>
                <p className="">HSN Code: 996601</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr className="border border-black h-px w-screen" />
        </div>

        <div className="px-6 pt-4 py-5">
          <div className="flex justify-between">
            <div className="gap-2 flex-[1/3] w-full items-center justify-center">
              <p className="text-left">{data?.detail?.source_address}</p>
            </div>
            <div className="flex-[1/3] w-full" />

            <div className="flex-[1/3] w-full items-center justify-center">
              <p className="text-right">{data?.detail?.destination_address}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-full flex-[1/3] flex justify-center">
              <img
                src="assets/gren-location-icon.svg"
                alt="location_icon"
                className="h-6 w-6"
              />
            </div>
            <div className="w-full flex justify-center flex-[1/3]">
              <img
                src="assets/Group_60.svg"
                alt="Group"
                className="rotate-90"
              />
            </div>
            <div className="w-full flex justify-center flex-[1/3]">
              <img
                src="assets/red-location-icon.svg"
                alt="location_icon"
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>

        <div>
          <hr className="border border-black w-screen" />
        </div>

        {data?.detail?.corporate_id !== null ? (
          <div className="container">
            <table className="table-auto py-3 mx-auto w-screen">
              <tr>
                <td rowSpan={2} className="bg-black w-40">
                  <img src="assets/user.svg" alt="user" className="p-4" />
                </td>
                <td rowSpan={2} className="bg-black w-40">
                  <div>
                    <span className="text-gray-400  text-xl">
                      Customer Name
                    </span>
                    <br />
                    <span className=" text-white text-xl">
                      {data?.detail?.user_first_name}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center text-xl text-gray-100 bg-green-900"
                  colSpan={2}
                >
                  <p className="text-center border-rounded underline font-semibold ">
                    CORPORATE TAX INVOICE
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2} className="bg-black w-40">
                  <img src="assets/pin.svg" alt="pin" className="p-4" />
                </td>
                <td rowSpan={2} className="bg-black w-40">
                  <div>
                    <span className="text-gray-400 text-xl">TRIP ID</span>
                    <br />
                    <span className=" text-gray-100 text-xl">
                      {data?.detail?.unique_id}
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className=" text-xl  bg-green-900 pb-2"></td>
                <td className="pl-10 text-xl bg-green-900 pb-2">
                  {/* {data?.detail?.surge_fee} */}
                </td>
              </tr>
              <tr>
                <td rowSpan={2} className="bg-black w-40">
                  <img
                    src="assets/vehicle-number.svg"
                    alt="vehicle"
                    className="p-4"
                  />
                </td>
                <td rowSpan={2} className="bg-black w-40">
                  <div>
                    <span className="text-gray-400  text-xl">
                      Vehicle Number
                    </span>
                    <br />
                    <span className=" text-gray-100 text-xl">
                      {data?.provider_detail?.vehicle_detail?.[0].plate_no}
                    </span>
                  </div>
                </td>

                <td className="pl-10 text-xl bg-green-900 pb-2">
                  {/* Amount */}
                </td>
                <td className="pl-10 text-xl bg-green-900 pb-2">
                  {/* {data?.detail?.base_distance_cost.toFixed(2)}  */}
                </td>
              </tr>
              <tr>
                <td className="pl-28 text-xl  bg-green-900 pb-2">
                  {/* Toll/Parking charges reimbursed */}
                </td>
                <td className="pl-10 text-xl  bg-green-900 pb-2">
                  {/* {data?.detail?.toll_amount} */}
                </td>
              </tr>
              <tr>
                <td rowSpan={2} className="bg-black w-40">
                  <img src="assets/vehicle-type.svg" alt="" className="p-4" />
                </td>
                <td rowSpan={2} className="bg-black w-40">
                  <div>
                    <span className="text-gray-400  text-xl">Vehicle Type</span>
                    <br />
                    <span className=" text-gray-100 text-xl">
                      {data?.service_detail?.typename}
                    </span>
                  </div>
                </td>
                <td className="pl-10 text-xl  bg-green-900 pb-2">
                  {/* Tax */}
                </td>
                <td className="pl-10 text-xl  bg-green-900 pb-2">
                  {/* {data?.detail?.tax_fee.toFixed(2)} */}
                </td>
              </tr>
              <tr>
                <td className="pl-28 text-xl  bg-green-900 pb-2">
                  {/* Discount */}
                </td>
                <td className="pl-10 text-xl  bg-green-900 pb-2">
                  {/* {data?.detail?.promo_payment}{" "} */}
                </td>
              </tr>
              <tr>
                <td rowSpan={2} className="bg-black w-40">
                  <img src="assets/mobile.svg" alt="mobile" className="p-4" />
                </td>
                <td rowSpan={2} className="bg-black w-40">
                  <div>
                    <span className="text-gray-400 text-xl">
                      Customer Ph.No
                    </span>
                    <br />
                    <span className="text-gray-100 text-xl">
                      {data?.user_detail?.phone}
                    </span>
                  </div>
                </td>
                <td className="pl-28 text-xl text-gray-100 bg-green-600 pb-2">
                  {/* Airport parking charges */}
                </td>
                <td className="pl-10 text-xl text-gray-100 bg-teal-700 pb-2">
                  {/* {data?.detail?.airport_add_charge} */}
                </td>
              </tr>

              <tr>
                <td className="text-center text-xl text-gray-100 bg-green-600">
                  Total amount
                </td>
                <td className=" text-center text-xl text-gray-100 bg-teal-700">
                  {/* {data?.detail?.total} */} 0
                </td>
              </tr>
            </table>
          </div>
        ) : (
          <>
            {data?.detail?.custom_price === true ? (
              <div className="container">
                <table className="table-auto py-3 mx-auto w-screen">
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img src="assets/user.svg" alt="user" className="p-4" />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400  text-xl">
                          Customer Name
                        </span>
                        <br />
                        <span className=" text-white text-xl">
                          {data?.detail?.user_first_name}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="col-span-2">
                    <td
                      className="text-center text-xl text-gray-100 bg-green-900"
                      colSpan={2}
                    >
                      <p className="text-center border-rounded underline font-semibold ">
                        TAX INVOICE
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img src="assets/pin.svg" alt="pin" className="p-4" />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400 text-xl">TRIP ID</span>
                        <br />
                        <span className=" text-gray-100 text-xl">
                          {data?.detail?.unique_id}
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className=" text-xl text-gray-100 bg-green-900 pb-2">
                      {/* <p className="text-center border-rounded underline font-semibold ">
                          TAX INVOICE
                        </p> */}
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {/* {data?.detail?.surge_fee} */}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/vehicle-number.svg"
                        alt="vehicle"
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400  text-xl">
                          Vehicle Number
                        </span>
                        <br />
                        <span className=" text-gray-100 text-xl">
                          {data?.provider_detail?.vehicle_detail?.[0].plate_no}
                        </span>
                      </div>
                    </td>

                    <td className="text-center text-xl text-gray-100 bg-green-600 pb-2">
                      Amount
                    </td>
                    <td className="text-center text-xl text-white bg-teal-700 pb-2">
                      {data?.detail?.base_distance_cost.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      {/* Toll/Parking charges reimbursed */}
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {/* {data?.detail?.toll_amount} */}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/vehicle-type.svg"
                        alt=""
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400  text-xl">
                          Vehicle Type
                        </span>
                        <br />
                        <span className=" text-gray-100 text-xl">
                          {data?.service_detail?.typename}
                        </span>
                      </div>
                    </td>
                    <td className="text-center text-xl text-gray-100 bg-green-600 pb-2">
                      Tax
                    </td>
                    <td className="text-center text-xl text-gray-100 bg-teal-700 pb-2">
                      {data?.detail?.tax_fee.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      {/* Discount */}
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {/* {data?.detail?.promo_payment}{" "} */}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/mobile.svg"
                        alt="mobile"
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400 text-xl">
                          Customer Ph.No
                        </span>
                        <br />
                        <span className="text-gray-100 text-xl">
                          {data?.user_detail?.phone}
                        </span>
                      </div>
                    </td>
                    <td className="pl-28 text-xl text-gray-100 bg-green-600 pb-2">
                      {/* Airport parking charges */}
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-teal-700 pb-2">
                      {/* {data?.detail?.airport_add_charge} */}
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center text-xl text-gray-100 bg-green-600">
                      Total amount
                    </td>
                    <td className=" text-center text-xl text-gray-100 bg-teal-700">
                      {data?.detail?.total}
                    </td>
                  </tr>
                </table>
              </div>
            ) : (
              <div className="container">
                <table className="table-auto py-3 mx-auto w-screen">
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img src="assets/user.svg" alt="user" className="p-4" />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400  text-xl">
                          Customer Name
                        </span>
                        <br />
                        <span className="pl-4 text-white text-xl">
                          {data?.detail?.user_first_name}
                        </span>
                      </div>
                    </td>
                    <td className="pl-28 text-xl text-gray-100 bg-green-500 pb-2">
                      Base price
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-500 pb-2">
                      {data?.tripservice?.base_price}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      Distance price
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {data?.detail?.distance_cost}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img src="assets/pin.svg" alt="data" className="p-4" />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400 pl-4 text-xl">
                          OHM Pin no
                        </span>
                        <br />
                        <span className="pl-4 text-gray-100 text-xl">
                          64676525
                        </span>
                      </div>
                    </td>
                    <td className="pl-28 text-xl text-gray-100 bg-green-500 pb-2">
                      Convenience charges
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-500 pb-2">
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      surcharges
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {data?.detail?.surge_fee}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/vehicle-number.svg"
                        alt=""
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400 pl-4 text-xl">
                          Vehicle number
                        </span>
                        <br />
                        <span className="pl-4 text-gray-100 text-xl">
                          {data?.provider_detail?.vehicle_detail?.[0].plate_no}
                        </span>
                      </div>
                    </td>
                    <td className="pl-28 text-xl text-gray-100 bg-green-500 pb-2">
                      Taxes
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-500 pb-2">
                      {data?.detail?.tax_fee}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      Toll/Parking charges reimbursed
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {data?.detail?.toll_amount}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/vehicle-type.svg"
                        alt=""
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400  text-xl">
                          Vehicle type
                        </span>
                        <br />
                        <span className="text-gray-100 text-xl">
                          {data?.service_detail?.typename}
                        </span>
                      </div>
                    </td>
                    <td className=" pl-28 text-xl text-gray-100 bg-green-500 ">
                      Total Amount
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-500 pb-2">
                      {data?.detail?.total_after_tax_fees}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2">
                      Discount
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {data?.detail?.promo_payment}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="bg-black w-40">
                      <img
                        src="assets/mobile.svg"
                        alt="Mobile"
                        className="p-4"
                      />
                    </td>
                    <td rowSpan={2} className="bg-black w-40">
                      <div>
                        <span className="text-gray-400 text-xl ">
                          Customer Mobile
                        </span>
                        <br />
                        <span className=" text-gray-100 text-xl">
                          {data?.user_detail?.phone}
                        </span>
                      </div>
                    </td>
                    <td className="pl-28 text-xl text-gray-100 bg-green-500 pb-2">
                      Airport parking charges
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-500 pb-2">
                      {data?.detail?.airport_add_charge}
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="pl-28 text-xl text-gray-100 bg-green-900 pb-2 ">
                      Total amount
                    </td>
                    <td className="pl-10 text-xl text-gray-100 bg-green-900 pb-2">
                      {data?.detail?.total}
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </>
        )}
        <>
          <div className="flex items-center justify-between px-10">
            <div>
              <p className=" pt-8 text-2xl">Trip date</p>
              <p className=" text-2xl">{data?.detail?.complete_date_tag}</p>
            </div>
            <div className="pt-8">
              <div className="flex items-center">
                <p className="text-2xl">Time</p>
              </div>
              <div className="flex items-center">
                {/* <FaRegClock className="mr-2text-2xl" /> */}
                <p className="text-2xl">{data?.detail?.total_time} min</p>
              </div>
            </div>

            <div>
              <p className=" pt-8 text-2xl">Distance</p>
              <p className=" text-2xl">
                {data?.detail?.total_distance} &nbsp;
                {data?.detail?.unit === 1 ? "Km" : "Miles"}
              </p>
            </div>
            <div>
              <p className="pt-8 text-2xl">Fare payable</p>
              {data?.detail?.corporate_id !== null ? (
                <p className="text-2xl">0 </p>
              ) : (
                <p className="text-2xl"> &#8377; {data?.detail?.total}</p>
              )}
            </div>
          </div>
        </>
        {/* <div className="w-full pt-3">
          <img src="assets/ad.svg " alt="ad" className="w-full" />
        </div> */}
        <div className="flex justify-between pt-20">
          <div>
            <p className="pt-2 pl-8 ">Thank you for riding with OHM</p>
            <p className="pl-8">
              Please take a moment to give us your valuable feedback
            </p>
          </div>
          <div className="pr-10">
            <div>
              {data?.detail?.unit === 1 && (
                <p className="text-base text-gray-500">
                  {data?.detail?.total_distance * 150}g CO2 Saved With This Ride
                </p>
              )}
            </div>

            <p className="text-gray-500 flex justify-center">
              {/* 1200+ Tonnes CO2 Saved Till October */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
